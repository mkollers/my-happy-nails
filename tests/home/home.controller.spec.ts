/// <reference path="../../typings/index.d.ts" />

module MyHappyNails {
    describe('HomeController', (): void => {
        let $controller: ng.IControllerService;
        let $rootScope: ng.IRootScopeService;

        beforeEach(angular.mock.module('my-happy-nails.home'));

        beforeEach(inject((_$controller_: ng.IControllerService, _$rootScope_: ng.IRootScopeService): void => {
            $controller = _$controller_;
            $rootScope = _$rootScope_;
        }));

        it('should create the controller', (): void => {
            // Arrange
            const controller = $controller<IHomeController>('HomeController');

            // Act
            $rootScope.$digest();

            // Assert
        });
    });
}