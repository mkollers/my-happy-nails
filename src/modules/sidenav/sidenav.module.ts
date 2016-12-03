import 'angular';
import 'angular-material';

import './sidenav-item/sidenav-item.module';

import { SidenavComponent } from './sidenav.component';
import { config as iconsConfig } from './configs/icons.config';

import 'angular-material/angular-material.scss';
import './sidenav.scss';

angular.module('my-happy-nails.sidenav', [
    // Angular modules

    // 3rd Party Modules
    'ngMaterial',

    // Custom modules	
    'my-happy-nails.sidenav.item'
]).component('myHappyNailsSidenav', new SidenavComponent())
    .config(iconsConfig);