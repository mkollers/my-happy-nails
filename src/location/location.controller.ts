/// <reference path="../../typings/index.d.ts" />

module MyHappyNails {
    'use strict';

    export interface ILocationController extends ng.IComponentController {
        iFrameUrl: string;
        location: google.maps.MapOptions;
        marker: google.maps.MarkerOptions;
    }

    class LocationController implements ILocationController {
        iFrameUrl: string;
        location: google.maps.MapOptions;
        marker: google.maps.MarkerOptions;

        constructor(private $sce: ng.ISCEService) {
        }

        $onInit() {
            this.iFrameUrl = this.$sce.trustAsResourceUrl('https://maps.google.de/maps?hl=de&q=Falkensteiner%20Weg%2010&t=&z=16&ie=UTF8&iwloc=B&output=embed');

            this.location = {
                center: {
                    lat: 50.133442,
                    lng: 8.5351918
                },
                disableDefaultUI: true,
                draggable: false,
                mapTypeId: 'MapTypeId.HYBRID',
                zoom: 18,
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
        .controller('LocationController', LocationController);
}