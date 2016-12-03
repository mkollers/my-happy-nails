/* @ngInject */
export function config($mdIconProvider: ng.material.IIconProvider): void {
    $mdIconProvider.icon('menu', './assets/menu.svg', 24);
    $mdIconProvider.icon('home', './assets/home.svg', 16);
    $mdIconProvider.icon('images', './assets/images.svg', 16);
    $mdIconProvider.icon('location', './assets/location.svg', 16);
    $mdIconProvider.icon('euro', './assets/euro.svg', 16);
    $mdIconProvider.icon('phone', './assets/phone.svg', 16);
    $mdIconProvider.icon('mail', './assets/mail.svg', 16);
    $mdIconProvider.icon('facebook', './assets/facebook.svg', 24);
    $mdIconProvider.icon('google-plus', './assets/google-plus.svg', 24);
    $mdIconProvider.icon('github', './assets/github.svg', 24);
}