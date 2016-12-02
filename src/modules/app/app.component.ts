import { AppController } from './app.controller';

export class AppComponent implements ng.IComponentOptions {
    public template = `
    <div layout="row" layout-fill>
        <my-happy-nails-sidenav items="::vm.sidenavItems" layout="row"></my-happy-nails-sidenav>
        <md-content layout="column" flex md-scroll-y>
            <my-happy-nails-toolbar header="{{ vm.header }}"></my-happy-nails-toolbar>
            <ui-view>
            </ui-view>
            <div flex></div>
            <my-happy-nails-footer links="::vm.footerLinks"></my-happy-nails-footer>
        </md-content>
    </div>`;
    public controller = AppController;
    public controllerAs = 'vm';
}