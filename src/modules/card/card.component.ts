import { CardController } from './card.controller';

export class CardComponent implements ng.IComponentOptions {
    public template = `
    <md-card>
        <div ng-if="::card.mapConfig" map-lazy-load="https://maps.google.com/maps/api/js?key=AIzaSyBQPESAm-ZR0hJlHcRpeKiYWjJxcYGmKMk">
            <ng-map zoom-control="{{ ::card.mapConfig.zoomControl }}" center="{{ ::card.mapConfig.center.lat }},{{ ::card.mapConfig.center.lng }}"
                zoom="{{ ::card.mapConfig.zoom }}" disable-default-u-i="{{ ::card.mapConfig.disableDefaultUI }}" draggable="{{ ::card.mapConfig.draggable }}">
                <marker ng-if="::card.mapMarker" position="{{ ::card.mapMarker.position.lat }},{{ ::card.mapMarker.position.lng }}" title="{{ ::card.mapMarker.title }}"></marker>
            </ng-map>
        </div>
        <md-card-title>
            <md-card-title-text>
                <span class="md-headline">{{ ::card.header }}</span>
            </md-card-title-text>
        </md-card-title>
        <md-card-content>
            <p ng-transclude>
            </p>
        </md-card-content>
    </md-card>`;
    public controller = CardController;
    public controllerAs = 'card';
    public bindings = {
        header: '@',
        mapConfig: '<',
        mapMarker: '<'
    };
    public transclude = true;
};