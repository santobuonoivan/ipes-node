import { SET_WHAT_RENDER } from './../actions';

const whatRender = (state = 0, action) => {
    switch (action.type) {
        case SET_WHAT_RENDER:
            return { ...state, whatRender: action.value}
        default:
            break;
    }
    return state;
}

export default whatRender;