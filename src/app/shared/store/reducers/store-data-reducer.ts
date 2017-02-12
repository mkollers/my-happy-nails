import { INITIAL_STORE_DATA, StoreData } from '../store-data';
import { Action } from '@ngrx/store';

export function storeDataReducer(state: StoreData = INITIAL_STORE_DATA, action: Action) {
    switch (action.type) {
        default:
            return state;
    }
}
