import { Photo } from '../../models/photo';
import { Action } from '@ngrx/store';

export const FACEBOOK = {
    ACCESS_TOKEN_RECEIVED: 'FACEBOOK_ACCESS_TOKEN_RECEIVED',
    LOAD_ACCESS_TOKEN: 'FACEBOOK_LOAD_ACCESS_TOKEN',
    LOAD_PHOTOS: 'FACEBOOK_LOAD_PHOTOS',
    PHOTOS_LOADED: 'FACEBOOK_PHOTOS_LOADED'
};

export class LoadFacebookAccessTokenAction implements Action {
    readonly type = FACEBOOK.LOAD_ACCESS_TOKEN;
};

export class LoadFacebookPhotosAction implements Action {
    readonly type = FACEBOOK.LOAD_PHOTOS;
};

export class FacebookAccessTokenReceivedAction implements Action {
    readonly type = FACEBOOK.ACCESS_TOKEN_RECEIVED;

    constructor(public payload?: string) { }
};

export class FacebookPhotosLoadedAction implements Action {
    readonly type = FACEBOOK.PHOTOS_LOADED;

    constructor(public payload?: Photo[]) { }
};
