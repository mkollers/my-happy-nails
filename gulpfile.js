var args = require('yargs').argv;
var azureDeploy = require('azure-deploy');
var browserSync = require('browser-sync').create();
var config = require('./gulp.config');
var del = require('del');
var es = require('event-stream');
var gulp = require('gulp');
var historyApiFallback = require('connect-history-api-fallback');
var karma = require('karma');
var path = require("path");
var port = process.env.PORT || config.defaultPort;
var package_json = require('./package.json');
var typescript = require('typescript');
var wiredep = require('wiredep').stream;
var $ = require('gulp-load-plugins')({ lazy: false });

gulp.task('default', ['serve:dev']);

/**
 * Optimize the code and re-load browserSync
 */
gulp.task('browserSyncReload', ['build'], browserSync.reload);

/**
 * Build everything
 */
gulp.task('build', ['build:dev', 'shared:dist'], function () {
    log('Building everything...');

    return gulp.src(config.temp + 'index.html')
        .pipe($.useref({ searchPath: '.' }))
        .pipe($.if('*.js', $.uglify()))
        .pipe($.if('*.js', getHeader()))
        .pipe($.if('*.css', $.csso()))
        .pipe($.if('*.css', getHeader()))
        .pipe(gulp.dest(config.build));
});

gulp.task('shared', function () {
    return copy(config.src + 'shared/**/*', config.temp);
});

gulp.task('shared:dist', function () {
    return copy(config.src + 'shared/**/*', config.build)
});

/**
 * Building everything into a temp folder 
 */
gulp.task('build:dev', ['inject', 'shared'], function () {
    log('Building for Development...');
});

/**
 * Inject bower_components and all scripts under source into index.html
 * and this + tests into karma.conf.js   
 */
gulp.task('inject', ['styles', 'scripts', 'templatecache'], function () {
    log('Wire up css and js into the html, after files are ready');

    var injectStyles = gulp
        .src(config.temp + 'styles/**/*.css', {
            read: false
        });

    var injectScripts = gulp
        .src(config.temp + 'scripts/**/*.js')
        .pipe($.angularFilesort());

    var injectTests = gulp
        .src([
            config.temp + 'scripts/**/*.js',
            config.temp + 'tests/**/*.spec.js'
        ])
        .pipe($.angularFilesort());

    var index = gulp
        .src(config.index)
        .pipe(wiredep(config.wiredepDefaultOptions))
        .pipe($.inject(injectScripts))
        .pipe($.inject(injectStyles))
        .pipe(gulp.dest(config.temp))
        .pipe(browserSync.stream());

    var test = gulp
        .src('./karma.conf.js')
        .pipe($.inject(injectTests, {
            starttag: '// inject:js',
            endtag: '// endbower',
            relative: true,
            transform: function (filepath, file, i, length) {
                return '  "' + filepath + '"' + (i + 1 < length ? ',' : '');
            }
        }))
        .pipe((wiredep(config.wiredepDefaultOptions)))
        .pipe(gulp.dest('./'));

    return es.concat(index, test);
});

/**
 * serve the dev environment
 * --debug-brk or --debug
 * --nosync
 */
gulp.task('serve:dev', ['build:dev'], function () {
    serve(true /*isDev*/);
});

gulp.task('serve', ['build'], function () {
    serve(false /*isDev*/);
});

gulp.task('scss-lint', function () {
    return gulp.src(config.scss)
        .pipe($.sassLint({
            configFile: '.scss-lint.yml'
        }))
        .pipe($.sassLint.format())
        .pipe($.sassLint.failOnError())
});

/**
 * tests the code and create coverage report
 * @return {Stream}
 */
gulp.task('test', ['inject'], function (done) {
    log('Testing...');

    var Server = karma.Server;
    new Server({
        configFile: path.join(__dirname, 'karma.conf.js')
    }, function () {
        done();
    }).start();
});

gulp.task('publish', function (done) {
    var deploymentManager = new azureDeploy.AzureWebSiteDeploymentManager(process.env.AZURE_WA_SITE, process.env.AZURE_WA_USERNAME, process.env.AZURE_WA_PASSWORD);

    deploymentManager.deploy(config.build).then(function (cb) {
        done();
    }).catch(function (error) {
        done(error);
    });
});

/**
 * lint the code and create coverage report
 * @return {Stream}
 */
gulp.task('lint', function () {
    log('Analyzing source with TSLint');

    var reporter = args.verbose ? 'verbose' : 'prose';

    var src = getChangedFiles(config.ts, config.temp + 'scripts', '.js');
    var test = getChangedFiles(config.tests, config.temp + 'tests', '.js');

    return es.merge(src, test)
        .pipe($.tslint({
            formatter: reporter
        }))
        .pipe($.tslint.report());
});

/**
 * Transpile ts to js 
 * @return {Stream}
 */
gulp.task('scripts', ['lint', 'templatecache'], function () {
    log('Transpiling TS --> JS');

    var src = transpileTS(config.ts, config.temp + 'scripts', true);
    var test = transpileTS(config.tests, config.temp + 'tests', false);

    return es.concat(src, test);
});

/**
 * Create $templateCache from the html templates
 * @return {Stream}
 */
gulp.task('templatecache', function () {
    log('Creating an AngularJS $templateCache');

    return gulp
        .src(config.templates)
        .pipe($.if(args.verbose, $.bytediff.start()))
        .pipe($.minifyHtml({ empty: true }))
        .pipe($.if(args.verbose, $.bytediff.stop(bytediffFormatter)))
        .pipe($.angularTemplatecache(
            config.templateCache.file,
            config.templateCache.options
        ))
        .pipe(gulp.dest(config.temp + 'scripts'))
        .pipe(browserSync.stream());
});

/**
 * Compile sass to css and copy css
 * @return {Stream}
 */
gulp.task('styles', ['scss-lint'], function () {
    log('Compiling Sass --> CSS');

    return getChangedFiles(config.scss, config.temp, '.css')
        .pipe($.sourcemaps.init())
        .pipe($.sass().on('error', $.sass.logError))
        .pipe($.autoprefixer({ browsers: ['last 5 versions'] }))
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest(config.temp + 'styles'))
        .pipe(browserSync.stream());
});

/////////////////////////////////////////////////

/**
 * Copy files, changed since the last transpilation 
 * @return {Stream}
 */
function copy(source, dest) {
    return gulp.src(source)
        .pipe(gulp.dest(dest));
}

/**
 * Formatter for bytediff to display the size changes after processing
 * @param  {Object} data - byte data
 * @return {String}      Difference in bytes, formatted
 */
function bytediffFormatter(data) {
    var difference = (data.savings > 0) ? ' smaller.' : ' larger.';
    return data.fileName + ' went from ' +
        (data.startSize / 1000).toFixed(2) + ' kB to ' +
        (data.endSize / 1000).toFixed(2) + ' kB and is ' +
        formatPercent(1 - data.percent, 2) + '%' + difference;
}

/**
 * Format a number as a percentage
 * @param  {Number} num       Number to format as a percent
 * @param  {Number} precision Precision of the decimal
 * @return {String}           Formatted perentage
 */
function formatPercent(num, precision) {
    return (num * 100).toFixed(precision);
}

/**
 * Delete all files in a given path
 * @param  {Array}   path - array of paths to delete
 * @param  {Function} done - callback when complete
 */
function clean(path, done) {
    log('Cleaning: ' + $.util.colors.blue(path));
    del(path).then(done());
}

/**
 * Returns all files, changed since the last transpilation 
 * @return {Stream}
 */
function getChangedFiles(source, dest, ext) {
    return gulp
        .src(source)
        .pipe($.changed(dest, { extension: ext }))
        .pipe($.if(args.verbose, $.print()))
}

/**
 * Format and return the header for files
 * @return {String}           Formatted file header
 */
function getHeader() {
    var pkg = package_json;
    var template = ['/**',
        ' * <%= pkg.name %> - <%= pkg.description %>',
        ' * @authors <%= pkg.author %>',
        ' * @version v<%= pkg.version %>',
        ' * @link <%= pkg.homepage %>',
        // ' * @license <%= pkg.license %>',
        ' */',
        ''
    ].join('\n');
    return $.header(template, {
        pkg: pkg
    });
}

/**
 * Log a message or series of messages using chalk's blue color.
 * Can pass in a string, object or array.
 */
function log(msg) {
    if (typeof (msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    } else {
        $.util.log($.util.colors.blue(msg));
    }
}

/**
 * Transpile ts to js 
 * @return {Stream}
 */
function transpileTS(source, dest, annotate) {
    var tsResult = getChangedFiles(source, dest, '.js')
        .pipe($.sourcemaps.init())
        .pipe($.typescript({
            removeComments: false,
            typescript: typescript,
            noImplicitAny: true,
            target: "es5"
        }));

    return tsResult.js
        // write comments to tell istanbul to ignore the code inside the iife parameters
        .pipe($.replace(/(}\)\()(.*\|\|.*;)/g, '$1/* istanbul ignore next */$2'))
        // write comments to tell istanbul to ignore the extends code that typescript generates
        .pipe($.replace(/(var __extends = \(this && this.__extends\))/g, '$1/* istanbul ignore next */'))
        .pipe($.if(annotate, $.ngAnnotate({ add: true })))
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest(dest))
        .pipe(browserSync.stream());
}

/**
 * serve the code
 * --debug-brk or --debug
 * --nosync
 * @param  {Boolean} isDev - dev or build mode
 * @param  {Boolean} specRunner - server spec runner html
 */
function serve(isDev, specRunner) {
    startBrowserSync(isDev, specRunner);
}

/**
 * Start BrowserSync
 * --nosync will avoid browserSync
 */
function startBrowserSync(isDev, specRunner) {
    if (args.nosync || browserSync.active) {
        return;
    }

    log('Starting BrowserSync on port ' + port);

    // If build: watches the files, builds, and restarts browser-sync.
    // If dev: watches less, compiles it to css, browser-sync handles reload
    if (isDev) {
        gulp.watch([config.scss], ['styles']).on('change', changeEvent);
        gulp.watch([config.ts], ['scripts']).on('change', changeEvent);
        gulp.watch([config.templates], ['templatecache']).on('change', changeEvent);
        gulp.watch(config.index, ['inject']).on('change', changeEvent);
    } else {
        gulp.watch([config.scss, config.ts, config.templates], ['browserSyncReload']).on('change', changeEvent);
    }

    var baseDir = isDev ? [
        config.temp,
        './'
    ] : [config.build];

    browserSync.init({
        server: {
            baseDir: baseDir,
            middleware: [historyApiFallback()]
        }
    });
}

/**
 * When files change, log it
 * @param  {Object} event - event that fired
 */
function changeEvent(event) {
    var srcPattern = new RegExp('/.*(?=/' + config.src + ')/');
    log('File ' + event.path.replace(srcPattern, '') + ' ' + event.type);
}