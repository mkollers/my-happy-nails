/// <reference path="../typings/index.d.ts" />

module MyHappyNails {
    describe('MainController', (): void => {
        let $controller: ng.IControllerService;
        let $rootScope: ng.IRootScopeService;

        beforeEach(angular.mock.module('my-happy-nails'));

        beforeEach(inject((_$controller_: ng.IControllerService, _$rootScope_: ng.IRootScopeService): void => {
            $controller = _$controller_;
            $rootScope = _$rootScope_;
        }));

        it('should set the sidenav-items', (): void => {
            // Arrange

            // Act
            const controller = $controller<IMainController>('MainController');
            $rootScope.$digest();

            // Assert
            expect(controller.sidenavItems).not.toBe(null);
            expect(controller.sidenavItems).not.toBe(undefined);
            expect(controller.sidenavItems.length).toEqual(5);
        });

        it('should initially set the header', (): void => {
            // Arrange

            // Act
            const controller = $controller<IMainController>('MainController');
            $rootScope.$digest();

            // Assert
            expect(controller.header).toEqual('Home');
        });

        it('should set the footer-items', (): void => {
            // Arrange

            // Act
            const controller = $controller<IMainController>('MainController');
            $rootScope.$digest();

            // Assert
            expect(controller.footerLinks).not.toBe(null);
            expect(controller.footerLinks).not.toBe(undefined);
            expect(controller.footerLinks.length).toEqual(controller.sidenavItems.length + 1);
        });
    });
}