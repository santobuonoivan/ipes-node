import { SET_MENU } from './../actions';

export const menu = (state, action) => {
    switch (action.type) {
        case SET_MENU:
            return { ...state, menu: action.value}
        default:
            break;
    }
    return state;
}