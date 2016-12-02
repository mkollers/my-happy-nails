import { SidenavController } from './sidenav.controller';

export class SidenavComponent implements ng.IComponentOptions {
    public template = `
    <md-sidenav md-whiteframe="4" md-component-id="left" md-is-locked-open="$mdMedia('gt-sm')">
        <object alt="Logo von My Happy Nails" data="assets/logo.svg" type="image/svg+xml"></object>
        <md-divider></md-divider>
        <md-list>        
            <md-list-item ng-repeat="item in ::sidenav.items">
                <mhn-sidenav-item view="::item.view" title="::item.title" icon="::item.icon" name="::item.name" />
            </md-list-item>
        </md-list>
    </md-sidenav>`;
    public controller = SidenavController;
    public controllerAs = 'sidenav';
    public bindings = {
        items: '<'
    };
}