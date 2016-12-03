import 'angular';
import 'angular-material';

import { ToolbarComponent } from './toolbar.component';

import 'angular-material/angular-material.scss';
import './toolbar.scss';

angular.module('my-happy-nails.toolbar', [
    // Angular modules

    // 3rd Party Modules
    'ngMaterial',

    // Custom modules	
]).component('myHappyNailsToolbar', new ToolbarComponent());