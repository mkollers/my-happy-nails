import 'angular';
import 'angulartics';
import 'angulartics-google-analytics';
import 'angular-material';
import 'angular-ui-router';

import '../sidenav/sidenav.module';
import '../toolbar/toolbar.module';
import '../footer/footer.module';
import '../home/home.module';

import { AppComponent } from './app.component';
import { config as themeConfig } from './configs/theme.config';

import 'angular-material/angular-material.scss';
import './app.scss';

angular.module('my-happy-nails.app', [
    // Angular modules

    // 3rd Party Modules
    'angulartics',
    'angulartics.google.analytics',
    'ngMaterial',
    'ui.router',

    // Custom modules
    'my-happy-nails.sidenav',
    'my-happy-nails.toolbar',
    'my-happy-nails.footer',
    'my-happy-nails.home'
]).component('myHappyNailsApp', new AppComponent())
    .config(themeConfig);
