/// <reference path="../../typings/index.d.ts" />

module MyHappyNails.Tests {
    describe('SidenavController', (): void => {
        let $controller: ng.IControllerService;
        let $rootScope: ng.IRootScopeService;

        beforeEach(angular.mock.module('my-happy-nails.sidenav.item'));

        beforeEach(inject((_$controller_: ng.IControllerService, _$rootScope_: ng.IRootScopeService): void => {
            $controller = _$controller_;
            $rootScope = _$rootScope_;
        }));

        it('should create the controller', (): void => {
            // Arrange

            // Act
            const controller = $controller<MyHappyNails.Sidenav.ISidenavItem>('SidenavItemController');
            $rootScope.$digest();

            // Assert
        });
    });
}