import { SidenavItemController } from './sidenav-item.controller';

export class SidenavItemComponent implements ng.IComponentOptions {
    public template = `
    <md-button class="md-primary" ng-click="::item.closeSidenav()" ui-sref="{{ ::item.view }}" ui-sref-active="active" title="{{ ::item.title }}">
        <md-icon md-svg-icon="{{ ::item.icon }}"></md-icon>
        {{ ::item.name }}
    </md-button>
    `;
    public controller = SidenavItemController;
    public controllerAs = 'item';
    public bindings = {
        icon: '<',
        name: '<',
        title: '<',
        view: '<',
    };
}