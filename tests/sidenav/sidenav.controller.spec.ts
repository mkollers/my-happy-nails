/// <reference path="../../typings/index.d.ts" />

module MyHappyNails {
    describe('SidenavController', (): void => {
        let $controller: ng.IControllerService;
        let $rootScope: ng.IRootScopeService;

        beforeEach(angular.mock.module('my-happy-nails.sidenav'));

        beforeEach(inject((_$controller_: ng.IControllerService, _$rootScope_: ng.IRootScopeService): void => {
            $controller = _$controller_;
            $rootScope = _$rootScope_;
        }));

        it('should create the controller', (): void => {
            // Arrange
            const bindings: ISidenavController = {
                items: [{
                    'name': 'Home',
                    'title': 'Aktuelle Informationen über mein Nagelstudio in Eschborn',
                    'view': 'base.home',
                    'icon': 'home'
                }, {
                    'name': 'Preise',
                    'title': 'Übersicht aller aktuellen Leistungen, Preise und Rabatte',
                    'view': 'base.prices',
                    'icon': 'euro'
                }]
            };
            const controller = $controller<ISidenavController>('SidenavController', {}, bindings);

            // Act
            $rootScope.$digest();

            // Assert
            expect(controller.items).toEqual(bindings.items);
        });
    });
}