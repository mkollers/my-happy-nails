/// <reference path="../../typings/index.d.ts" />

module MyHappyNails {
    describe('routes', (): void => {
        let $urlRouterProvider: ng.ui.IUrlRouterProvider;
        let $state: ng.ui.IStateService;
        let $location: ng.ILocationService;
        let $rootScope: ng.IRootScopeService;

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

        beforeEach(inject((_$state_: ng.ui.IStateService, _$location_: ng.ILocationService, _$rootScope_: ng.IRootScopeService): void => {
            $state = _$state_;
            $location = _$location_;
            $rootScope = _$rootScope_;
        }));

        it('should set default route to root', (): void => {
            expect($urlRouterProvider.otherwise).toHaveBeenCalledWith('/');
        });

        it('should go to /', (): void => {
            // Arrange
            $state.go('base.home');

            // Act
            $rootScope.$digest();

            // Assert
            expect($location.url()).toEqual('/');
            expect($state.current.data.header).toEqual('Home');
        });

        it('should go to /Preise', (): void => {
            // Arrange
            $state.go('base.prices');

            // Act
            $rootScope.$digest();

            // Assert
            expect($location.url()).toEqual('/Preise');
            expect($state.current.data.header).toEqual('Preise');
        });

        it('should go to /Bilder', (): void => {
            // Arrange
            $state.go('base.images');

            // Act
            $rootScope.$digest();

            // Assert
            expect($location.url()).toEqual('/Bilder');
            expect($state.current.data.header).toEqual('Bilder');
        });

        it('should go to /Kontakt', (): void => {
            // Arrange
            $state.go('base.contact');

            // Act
            $rootScope.$digest();

            // Assert
            expect($location.url()).toEqual('/Kontakt');
            expect($state.current.data.header).toEqual('Kontakt');
        });

        it('should go to /Anfahrt', (): void => {
            // Arrange
            $state.go('base.location');

            // Act
            $rootScope.$digest();

            // Assert
            expect($location.url()).toEqual('/Anfahrt');
            expect($state.current.data.header).toEqual('Anfahrt');
        });

        it('should go to /Impressum', (): void => {
            // Arrange
            $state.go('base.imprint');

            // Act
            $rootScope.$digest();

            // Assert
            expect($location.url()).toEqual('/Impressum');
            expect($state.current.data.header).toEqual('Impressum');
        });
    });
}