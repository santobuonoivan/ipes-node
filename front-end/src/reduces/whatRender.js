import { SET_WHAT_RENDER } from './../actions';

const whatRender = (state = '', action) => {
    switch (action.type) {
        case SET_WHAT_RENDER:
            return { ...state, response: action.value.response}
        default:
            break;
    }
    return state;
}

export default whatRender;