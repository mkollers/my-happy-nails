import { UI, UpdateTitleAction } from '../actions/ui-actions';
import { INITIAL_UI_STATE, UiState } from '../ui-state';
import { state } from '@angular/core';
import { Action } from '@ngrx/store';

export function uiStateReducer(state: UiState = INITIAL_UI_STATE, action: Action) {
    switch (action.type) {
        case UI.UPDATE_TITLE_ACTION:
            return handleUpdateTitle(state, action as UpdateTitleAction);
        default:
            return state;
    }
}

function handleUpdateTitle(state: UiState, action: UpdateTitleAction): UiState {
    const title = action.payload;
    const newState: UiState = Object.assign({}, state);

    newState.title = title;

    return newState;
}
