import { Action } from '@ngrx/store';

export const SEO = {
    UPDATE_DESCRIPTION_ACTION: 'UPDATE_DESCRIPTION_ACTION',
    UPDATE_HEADER_ACTION: 'UPDATE_HEADER_ACTION',
    UPDATE_KEYWORDS_ACTION: 'UPDATE_KEYWORDS_ACTION',
    UPDATE_TITLE_ACTION: 'UPDATE_TITLE_ACTION'
};

export class UpdateDescriptionAction implements Action {
    readonly type = SEO.UPDATE_DESCRIPTION_ACTION;

    constructor(public payload?: string) { }
};

export class UpdateHeaderAction implements Action {
    readonly type = SEO.UPDATE_HEADER_ACTION;

    constructor(public payload?: string) { }
};

export class UpdateTitleAction implements Action {
    readonly type = SEO.UPDATE_TITLE_ACTION;

    constructor(public payload?: string) { }
};

export class UpdateKeywordsAction implements Action {
    readonly type = SEO.UPDATE_KEYWORDS_ACTION;

    constructor(public payload?: string[]) { }
};
