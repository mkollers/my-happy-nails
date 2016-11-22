/// <reference path="../typings/index.d.ts" />

module MyHappyNails.Tests {
    describe('MainController', (): void => {
        let $controller: ng.IControllerService;
        let $rootScope: ng.IRootScopeService;

        beforeEach(angular.mock.module('my-happy-nails'));

        beforeEach(inject((_$controller_: ng.IControllerService, _$rootScope_: ng.IRootScopeService): void => {
            $controller = _$controller_;
            $rootScope = _$rootScope_;
        }));

        it('should set items', (): void => {
            // Arrange

            // Act
            const controller = $controller<MyHappyNails.IMainController>('MainController');
            $rootScope.$digest();

            // Assert
            expect(controller.sidenavItems).not.toBe(null);
            expect(controller.sidenavItems).not.toBe(undefined);
        });
    });
}