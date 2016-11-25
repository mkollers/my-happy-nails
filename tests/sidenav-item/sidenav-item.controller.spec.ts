/// <reference path="../../typings/index.d.ts" />

module MyHappyNails {
    describe('SidenavController', (): void => {
        let $controller: ng.IControllerService;
        let $rootScope: ng.IRootScopeService;
        let closeMock: any;

        beforeEach(angular.mock.module('my-happy-nails.sidenav.item', ($provide: ng.auto.IProvideService): void => {
            closeMock = jasmine.createSpy('closeMock');
            $provide.factory('$mdSidenav', (): any => {
                return (): any => {
                    return { close: closeMock };
                };
            });
        }));

        beforeEach(inject((_$controller_: ng.IControllerService, _$rootScope_: ng.IRootScopeService): void => {
            $controller = _$controller_;
            $rootScope = _$rootScope_;
        }));

        it('should create the controller', (): void => {
            // Arrange

            // Act
            const controller = $controller<ISidenavItemController>('SidenavItemController');
            $rootScope.$digest();

            // Assert
        });

        it('should close sidenav', inject(($mdSidenav: ng.material.ISidenavService): void => {
            // Arrange
            const controller = $controller<ISidenavItemController>('SidenavItemController');
            $rootScope.$digest();

            // Act
            controller.closeSidenav();

            // Assert
            expect(closeMock).toHaveBeenCalled();
        }));
    });
}