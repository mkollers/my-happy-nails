/// <reference path="../../typings/index.d.ts" />

module MyHappyNails {
    'use strict';

    export interface IHomeController extends ng.IComponentController {
        location: google.maps.MapOptions;
        marker: google.maps.MarkerOptions;
    }

    class HomeController implements IHomeController {
        location: google.maps.MapOptions;
        marker: google.maps.MarkerOptions;

        $onInit() {
            this.location = {
                center: {
                    lat: 50.133442,
                    lng: 8.5351918
                },
                disableDefaultUI: true,
                draggable: true,
                zoom: 17,
                zoomControl: false
            };

            this.marker = {
                position: this.location.center,
                title: 'My Happy Nails - Sulzbach (Taunus)'
            };
        }
    }

    angular
        .module('my-happy-nails.home')
        .controller('HomeController', HomeController);
}