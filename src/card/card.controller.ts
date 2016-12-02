/// <reference path="../../typings/index.d.ts" />

module MyHappyNails {
    'use strict';

    export interface ICardController extends ng.IComponentController {
        header: string;
        iFrameUrl: string;
        saveIFrameUrl: string;
        mapConfig: google.maps.MapOptions;
        text: string;
    }

    class CardController implements ICardController {
        header: string;
        iFrameUrl: string;
        saveIFrameUrl: string;
        mapConfig: google.maps.MapOptions;
        text: string;

        constructor(private $sce: ng.ISCEService) {
        }

        $onInit() {
            this.saveIFrameUrl = this.$sce.trustAsResourceUrl(this.iFrameUrl);
        }
    }

    angular
        .module('my-happy-nails.card')
        .controller('CardController', CardController);
}