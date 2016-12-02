import 'angular';
import 'angular-material';
import 'ngmap';

import { CardComponent } from './card.component';

angular.module('my-happy-nails.card', [
    // Angular modules

    // 3rd Party Modules
    'ngMaterial',
    'ngMap'

    // Custom modules	
]).component('myHappyNailsCard', new CardComponent());