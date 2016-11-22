/// <reference path="../../typings/index.d.ts" />

module MyHappyNails {
    describe('routes', (): void => {
        let $urlRouterProvider: ng.ui.IUrlRouterProvider;

        beforeEach((): void => {
            angular.module('urlRouterProviderConfig', ['ui.router', 'my-happy-nails.sidenav'])
                .config((_$urlRouterProvider_: ng.ui.IUrlRouterProvider): void => {
                    $urlRouterProvider = _$urlRouterProvider_;
                    spyOn($urlRouterProvider, 'otherwise');
                });
            angular.mock.module('urlRouterProviderConfig');
            angular.mock.module('my-happy-nails');
            inject();
        });

        it('should set default route to root', (): void => {
            console.log($urlRouterProvider);
            expect($urlRouterProvider.otherwise).toHaveBeenCalledWith('/');
        });
    });
}