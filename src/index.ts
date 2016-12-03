import 'angular';

import './modules/app/app.module';

angular.module('my-happy-nails', ['my-happy-nails.app']);
angular.bootstrap(document, ['my-happy-nails'], {
    strictDi: true
});