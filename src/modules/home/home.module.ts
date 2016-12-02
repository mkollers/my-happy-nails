import 'angular';
import 'angular-material';
import 'ngmap';

import '../card/card.module';

import { HomeComponent } from './home.component';

angular.module('my-happy-nails.home', [
    // Angular modules

    // 3rd Party Modules
    'ngMaterial',

    // Custom modules	
    'my-happy-nails.card'
]).component("myHappyNailsHome", new HomeComponent());