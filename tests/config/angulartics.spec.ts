/// <reference path="../../typings/index.d.ts" />

namespace MyHappyNails.Tests {
    describe('module: CONFIG', (): void => {
        let $analyticsProvider: angulartics.IAnalyticsServiceProvider;

        beforeEach((): void => {
            angular.module('angularticsProviderConfig', [ 'angulartics' ])
                .config((_$analyticsProvider_: angulartics.IAnalyticsServiceProvider): void => {
                    $analyticsProvider = _$analyticsProvider_;
                    spyOn($analyticsProvider, 'firstPageview');
                    spyOn($analyticsProvider, 'withAutoBase');
                });
            angular.mock.module('angularticsProviderConfig');
            angular.mock.module('my-happy-nails');
            inject();
        });

        it('should set firstPageview to true', (): void => {
            expect($analyticsProvider.firstPageview).toHaveBeenCalledWith(true);
        });

        it('should set withAutoBase to true', (): void => {
            expect($analyticsProvider.withAutoBase).toHaveBeenCalledWith(true);
        });
    });
}