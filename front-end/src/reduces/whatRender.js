import { SET_WHAT_RENDER } from './../actions';

const whatRender = (state = '', action) => {
    switch (action.type) {
        case SET_WHAT_RENDER:
            const { payload } = action;
            //debugger;
            return  payload ;
        default:
            return state;
    }
}

export default whatRender;