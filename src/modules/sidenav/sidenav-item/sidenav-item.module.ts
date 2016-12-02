import 'angular';
import 'angular-material';
import 'angular-ui-router';

import './sidenav-item.controller';

import { SidenavItemComponent } from './sidenav-item.component';

angular.module('my-happy-nails.sidenav.item', [
    // Angular modules

    // 3rd Party Modules
    'ngMaterial',
    'ui.router',

    // Custom modules	
]).component("myHappyNailsSidenavItem", new SidenavItemComponent());