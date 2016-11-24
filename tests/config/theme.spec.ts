/// <reference path="../../typings/index.d.ts" />

module MyHappyNails {
    describe('config', (): void => {
        let $mdThemingProvider: ng.material.IThemingProvider;
        let $mdIconProvider: ng.material.IIconProvider;

        beforeEach((): void => {
            angular.module('themingProviderConfig', ['ngMaterial'])
                .config((_$mdThemingProvider_: ng.material.IThemingProvider, _$mdIconProvider_: ng.material.IIconProvider): void => {
                    $mdThemingProvider = _$mdThemingProvider_;
                    $mdIconProvider = _$mdIconProvider_;

                    spyOn($mdThemingProvider, 'definePalette');
                    spyOn($mdIconProvider, 'icon');
                });
            angular.mock.module('themingProviderConfig');
            angular.mock.module('my-happy-nails');
            inject();
        });

        it('should create the my-happy-nails color palette', (): void => {
            const palette = {
                '50': '#ffffff',
                '100': '#ead1ee',
                '200': '#d7a8df',
                '300': '#bf74cc',
                '400': '#b55dc4',
                '500': '#ab47bc',
                '600': '#983da7',
                '700': '#843591',
                '800': '#6f2d7b',
                '900': '#5b2464',
                'A100': '#ffffff',
                'A200': '#ead1ee',
                'A400': '#b55dc4',
                'A700': '#843591',
                'contrastDefaultColor': 'light',
                'contrastDarkColors': '50 100 200 300 400 A100 A200 A400'
            };

            expect($mdThemingProvider.definePalette).toHaveBeenCalledWith('my-happy-nails', palette);
        });

        it('should register icons', (): void => {
            expect($mdIconProvider.icon).toHaveBeenCalledWith('menu', './assets/menu.svg', 24);
            expect($mdIconProvider.icon).toHaveBeenCalledWith('home', './assets/home.svg', 16);
            expect($mdIconProvider.icon).toHaveBeenCalledWith('images', './assets/images.svg', 16);
            expect($mdIconProvider.icon).toHaveBeenCalledWith('location', './assets/location.svg', 16);
            expect($mdIconProvider.icon).toHaveBeenCalledWith('euro', './assets/euro.svg', 16);
            expect($mdIconProvider.icon).toHaveBeenCalledWith('phone', './assets/phone.svg', 16);
        });
    });
}