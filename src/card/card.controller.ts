/// <reference path="../../typings/index.d.ts" />

module MyHappyNails {
    'use strict';

    export interface ICardController {
        header: string;
        text: string;
    }

    class CardController implements ICardController {
        header: string;
        text: string;

        constructor() {
        }
    }

    angular
        .module('my-happy-nails.card')
        .controller('CardController', CardController);
}