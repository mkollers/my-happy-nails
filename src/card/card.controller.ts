/// <reference path="../../typings/index.d.ts" />

module MyHappyNails {
    'use strict';

    export interface ICardController extends ng.IComponentController {
        header: string;
        mapConfig: google.maps.MapOptions;
        text: string;
    }

    class CardController implements ICardController {
        header: string;
        mapConfig: google.maps.MapOptions;
        text: string;

        constructor() {
        }
    }

    angular
        .module('my-happy-nails.card')
        .controller('CardController', CardController);
}