const temp = './.tmp/';
const build = './dist/';
const src = './src/';
const index = src + 'index.html';
const test = './tests/';
const bower = {
    json: require('./bower.json'),
    directory: './bower_components/',
    ignorePath: '..'
};

const config = {
    build: build,
    defaultPort: 3000,
    index: index,
    scss: src + '**/*.scss',
    src: src,
    temp: temp,
    templates: [ 
        src + '**/*.html',
        '!' + index
    ],
    ts: src + '**/*.ts',
    tests: test + '**/*.spec.ts',

    wiredepDefaultOptions: {
        bowerJson: bower.json,
        directory: bower.directory,
        ignorePath: bower.ignorePath
    },

    /**
    * template cache
    */
    templateCache: {
        file: 'templates.js',
        options: {
            root: '/my-happy-nails',
            module: 'my-happy-nails',
            standAlone: false
        }
    }
}

module.exports = config;
