import { SET_MENU } from './../actions';

const menu = (state = {}, action) => {
    switch (action.type) {
        case SET_MENU:
            return { ...state = action.value}
        default:
            break;
    }
    return state;
}

export default menu;