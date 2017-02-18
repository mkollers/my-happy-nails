import { FACEBOOK, FacebookPhotosLoadedAction } from '../actions/facebook-actions';
import { INITIAL_STORE_DATA, StoreData } from '../store-data';
import { Action } from '@ngrx/store';

export function storeDataReducer(state: StoreData = INITIAL_STORE_DATA, action: Action) {
    switch (action.type) {
        case FACEBOOK.PHOTOS_LOADED:
            return handleFacebookPhotosLoaded(state, action);
        default:
            return state;
    }
}

function handleFacebookPhotosLoaded(state: StoreData, action: FacebookPhotosLoadedAction): StoreData {
    const photos = action.payload;
    const newState: StoreData = Object.assign({}, state);

    newState.photos = photos;

    return newState;
}
