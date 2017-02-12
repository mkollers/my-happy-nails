import { Action } from '@ngrx/store';

export const UI = {
    UPDATE_TITLE_ACTION: 'UPDATE_TITLE_ACTION'
};

export class UpdateTitleAction implements Action {
    readonly type = UI.UPDATE_TITLE_ACTION;

    constructor(public payload?: string) { }
};
