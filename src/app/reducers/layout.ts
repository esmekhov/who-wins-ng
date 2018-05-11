const EDIT = 'EDIT';
const SAVE = 'SAVE';
const CANCEL = 'CANCEL';

export interface Layout {
    edit: boolean;
    finished: boolean;
}

export enum Actions {EDIT, SAVE, CANCEL}

const merge = (state: Layout) => (obj) => Object.assign({}, state, obj);
export const reducer = (state: Layout, action) => {
    const apply = merge(state);
    switch (action.type) {
        case EDIT:
            return apply({edit: true});
        case SAVE:
            return apply({edit: false});
        case CANCEL:
            return apply({edit: false});
        default:
            return state;
    }
};

export const getEdit = (state: Layout) => state.edit;
export const getFinished = (state: Layout) => state.finished;
