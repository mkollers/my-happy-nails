import { FooterController } from './footer.controller';

export class FooterComponent implements ng.IComponentOptions {
    public template = `
    <footer md-colors="::{background: 'default-primary-300'}" layout-xs="row" layout-gt-sm="column">
        <div layout-xs="column" layout="row" layout-align-xs="center start"  layout-align="center center" flex-xs="60">
            <a ng-repeat="link in ::footer.links" ui-sref="{{ ::link.view }}" title="{{ ::link.title }}">{{ ::link.name }}</a>
        </div>
        <div layout-xs="column" layout="row" flex-xs="40" layout-align-xs="center end" layout-align="center center">
            <md-button href="https://www.facebook.com/MyHappyNailsNagelstudio" title="Zur Facebook-Seite" target="_blank" rel="noopener noreferrer"
                class="md-icon-button" analytics-on analytics-event="Facebook" analytics-category="external link" analytics-label="Zur Facebook-Seite">
                <md-tooltip md-direction="top">
                    Facebook
                </md-tooltip>
                <md-icon md-svg-icon="facebook"></md-icon>
            </md-button>
            <md-button href="https://plus.google.com/+MyHappyNailsEschborn" title="Zur Google+-Seite" target="_blank" rel="noopener noreferrer"
                class="md-icon-button" analytics-on analytics-event="Google+" analytics-category="external link" analytics-label="Zur Google+-Seite">
                <md-tooltip md-direction="top">
                    Google+
                </md-tooltip>
                <md-icon md-svg-icon="google-plus"></md-icon>
            </md-button>
            <md-button href="https://github.com/mkollers/my-happy-nails" title="Zu Github" target="_blank" rel="noopener noreferrer"
                class="md-icon-button" analytics-on analytics-event="Github" analytics-category="external link" analytics-label="Zur Github-Seite">
                <md-tooltip md-direction="top">
                    Github
                </md-tooltip>
                <md-icon md-svg-icon="github"></md-icon>
            </md-button>
        </div>
    </footer>`;
    public controller = FooterController;
    public controllerAs = 'footer';
    public bindings = {
        links: '<'
    };
}