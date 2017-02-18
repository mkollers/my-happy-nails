import { FACEBOOK, FacebookAccessTokenReceivedAction } from '../actions/facebook-actions';
import { UI, UpdateTitleAction } from '../actions/ui-actions';
import { INITIAL_UI_STATE, UiState } from '../ui-state';
import { state } from '@angular/core';
import { Action } from '@ngrx/store';

export function uiStateReducer(state: UiState = INITIAL_UI_STATE, action: Action) {
    switch (action.type) {
        case FACEBOOK.ACCESS_TOKEN_RECEIVED:
            return handleFacebookAccessTokenReceived(state, action as FacebookAccessTokenReceivedAction);
        case UI.UPDATE_TITLE_ACTION:
            return handleUpdateTitle(state, action as UpdateTitleAction);
        default:
            return state;
    }
}

function handleFacebookAccessTokenReceived(state: UiState, action: FacebookAccessTokenReceivedAction): UiState {
    const accessToken = action.payload;
    const newState: UiState = Object.assign({}, state);

    newState.facebook.accessToken = accessToken;

    return newState;
}

function handleUpdateTitle(state: UiState, action: UpdateTitleAction): UiState {
    const title = action.payload;
    const newState: UiState = Object.assign({}, state);

    newState.title = title;

    return newState;
}
