import { createStore } from 'redux';
import { menu } from './../reduces/menu';

const initialState = {
    menuSeleccionado:[],
    component:null,
    users:null,
};

export const store = createStore( menu, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());