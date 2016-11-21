/// <reference path="../typings/index.d.ts" />

module MyHappyNails.Tests {
    describe('module: CONFIG', (): void => {
        let $locationProvider: ng.ILocationProvider;

        beforeEach((): void => {
            angular.mock.module('my-happy-nails');            
            inject();
        });

        it('should set html5mode to false', (): void => {
        });
    });
}