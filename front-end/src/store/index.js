import { createStore } from 'redux';
import reducer from './../reduces/index';

const initialState = {
    menu: { 
        buttons: [],
        onclick: [],
    },
    whatRender: {
        response: {},
        component: '',
    },
};

export const store = createStore( reducer, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());