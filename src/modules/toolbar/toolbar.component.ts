import { ToolbarController } from './toolbar.controller';

export class ToolbarComponent implements ng.IComponentOptions {
    public template = `
    <md-toolbar layout="row" class="md-toolbar-tools">
        <md-button class="menu md-icon-button" hide-gt-sm ng-click="::toolbar.toggleSidenav()" aria-label="Navigation anzeigen">
            <md-icon md-colors="::{fill: 'default-primary-500'}" md-svg-icon="menu"></md-icon>
        </md-button>
        <h1 ng-if="toolbar.header" md-colors="::{color: 'default-primary-500'}">{{ toolbar.header }}</h1>
    </md-toolbar>`;
    public controller = ToolbarController;
    public controllerAs = 'toolbar';
    public bindings = {
        header: '@'
    };
}