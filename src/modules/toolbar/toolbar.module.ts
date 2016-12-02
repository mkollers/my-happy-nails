import 'angular';
import 'angular-material';

import { ToolbarComponent } from './toolbar.component';

angular.module('my-happy-nails.toolbar', [
    // Angular modules

    // 3rd Party Modules
    'ngMaterial',

    // Custom modules	
]).component("myHappyNailsToolbar", new ToolbarComponent());