import { createStore } from 'redux';
import reducer from './../reduces/index';

const initialState = {
    menu:{},
    whatRender: '',
    response: '',
};

export const store = createStore( reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());