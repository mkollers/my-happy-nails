import 'angular';
import 'angular-material';
import 'angulartics';
import 'angulartics-google-analytics';

import { FooterComponent } from './footer.component';

angular.module('my-happy-nails.footer', [
    // Angular modules

    // 3rd Party Modules
    'ngMaterial',
    'angulartics',
    'angulartics.google.analytics'

    // Custom modules	
]).component("myHappyNailsFooter", new FooterComponent());