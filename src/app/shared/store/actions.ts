import { Action } from '@ngrx/store';

export const CHANGE_TITLE_ACTION = 'CHANGE_TITLE_ACTION';

export class ChangeTitleAction implements Action {
    readonly type = CHANGE_TITLE_ACTION;

    constructor(public payload?: string) { }
};
