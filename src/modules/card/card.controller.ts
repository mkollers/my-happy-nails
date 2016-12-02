export interface ICardController extends ng.IComponentController {
    header: string;
    mapConfig: google.maps.MapOptions;
    text: string;
}

export class CardController implements ICardController {
    header: string;
    mapConfig: google.maps.MapOptions;
    text: string;
}