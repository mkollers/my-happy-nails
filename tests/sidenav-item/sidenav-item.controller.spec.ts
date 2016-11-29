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
            const bindings: ISidenavItem = {
                name: 'Preise',
                title: 'Übersicht aller aktuellen Leistungen, Preise und Rabatte',
                view: 'base.prices',
                icon: 'euro'
            };
            const controller = $controller<ISidenavItemController>('SidenavItemController', {}, bindings);

            // Act
            $rootScope.$digest();

            // Assert
            expect(controller.name).toEqual(bindings.name);
            expect(controller.title).toEqual(bindings.title);
            expect(controller.view).toEqual(bindings.view);
            expect(controller.icon).toEqual(bindings.icon);
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