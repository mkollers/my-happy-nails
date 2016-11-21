/// <reference path="../../typings/index.d.ts" />

module MyHappyNails.Tests {
    describe('module: CONFIG', (): void => {
        let $locationProvider: ng.ILocationProvider;

        beforeEach((): void => {
            angular.module('locationProviderConfig', [])
                .config((_$locationProvider_: ng.ILocationProvider): void => {
                    $locationProvider = _$locationProvider_;
                    spyOn($locationProvider, 'html5Mode');
                });
            angular.mock.module('locationProviderConfig');
            angular.mock.module('my-happy-nails');
            inject();
        });

        it('should set html5mode to true', (): void => {
            expect($locationProvider.html5Mode).toHaveBeenCalledWith(true);
        });
    });
}