import { ApplicationState, INITIAL_APPLICATION_STATE } from '../application-state';
import { storeDataReducer } from './store-data-reducer';
import { uiStateReducer } from './ui-state-reducer';
import { Action } from '@ngrx/store';

export function storeReducer(state: ApplicationState = INITIAL_APPLICATION_STATE, action: Action) {
    return {
        uiState: uiStateReducer(state.uiState, action),
        storeData: storeDataReducer(state.storeData, action)
    };
}
