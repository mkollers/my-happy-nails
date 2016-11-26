/// <reference path="../../typings/index.d.ts" />

module MyHappyNails {
    describe('FooterController', (): void => {
        let $controller: ng.IControllerService;
        let $rootScope: ng.IRootScopeService;

        beforeEach(angular.mock.module('my-happy-nails.footer'));

        beforeEach(inject((_$controller_: ng.IControllerService, _$rootScope_: ng.IRootScopeService): void => {
            $controller = _$controller_;
            $rootScope = _$rootScope_;
        }));

        it('should create the controller', (): void => {
            // Arrange
            const controller = $controller<IFooterController>('FooterController');

            // Act
            $rootScope.$digest();

            // Assert
        });
    });
}