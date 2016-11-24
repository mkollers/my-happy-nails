/// <reference path="../../typings/index.d.ts" />

module MyHappyNails {
    describe('ToolbarController', (): void => {
        let $controller: ng.IControllerService;
        let $rootScope: ng.IRootScopeService;
        let toggleMock: any;

        beforeEach(angular.mock.module('my-happy-nails.toolbar', ($provide: ng.auto.IProvideService): void => {
            toggleMock = jasmine.createSpy('toggleMock');
            $provide.factory('$mdSidenav', (): any => {
                return (): any => {
                    return { toggle: toggleMock };
                };
            });
        }));

        beforeEach(inject((_$controller_: ng.IControllerService, _$rootScope_: ng.IRootScopeService): void => {
            $controller = _$controller_;
            $rootScope = _$rootScope_;
        }));

        it('should create the controller', (): void => {
            // Arrange
            const controller = $controller<IToolbarController>('ToolbarController');

            // Act
            $rootScope.$digest();

            // Assert
        });

        it('should toogle sidenav', inject(($mdSidenav: ng.material.ISidenavService): void => {
            // Arrange
            const controller = $controller<IToolbarController>('ToolbarController');
            $rootScope.$digest();

            // Act
            controller.toggleSidenav();

            // Assert
            expect(toggleMock).toHaveBeenCalled();
        }));
    });
}