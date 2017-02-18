import { Action } from '@ngrx/store';

export const FACEBOOK = {
    LOAD_ACCESS_TOKEN: 'FACEBOOK_LOAD_ACCESS_TOKEN',
    ACCESS_TOKEN_RECEIVED: 'FACEBOOK_ACCESS_TOKEN_RECEIVED'
};

export class LoadFacebookAccessTokenAction implements Action {
    readonly type = FACEBOOK.LOAD_ACCESS_TOKEN;
};

export class FacebookAccessTokenReceivedAction implements Action {
    readonly type = FACEBOOK.ACCESS_TOKEN_RECEIVED;

    constructor(public payload?: string) { }
};
