/// <reference path="../../typings/index.d.ts" />

module MyHappyNails.Tests {
    describe('routes', (): void => {
        let $urlRouterProvider: ng.ui.IUrlRouterProvider;

        beforeEach((): void => {
            angular.module('locationProviderConfig', ['ui.router'])
                .config((_$urlRouterProvider_: ng.ui.IUrlRouterProvider): void => {
                    $urlRouterProvider = _$urlRouterProvider_;
                    spyOn($urlRouterProvider, 'otherwise');
                });
            angular.mock.module('locationProviderConfig');
            angular.mock.module('my-happy-nails');
            inject();
        });

        it('should set default route to root', (): void => {
            expect($urlRouterProvider.otherwise).toHaveBeenCalledWith('/');
        });
    });
}