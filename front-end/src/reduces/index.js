import { combineReducers } from 'redux';
import { 
    menu,
    getMenu as _getMenu,
    } from './menu';
import whatRender from './whatRender';
import { createSelector } from 'reselect';


export default combineReducers({
    menu,
    whatRender,
});

/*
export const getCity = createSelector(state => state.city, city => city);

export const getForecastDataFromCities = createSelector( 
    state => state.cities, 
    getCity,
    _getForecastDataFromCities);
*/
export const getMenu = createSelector( 
    state => state.menu,
    _getMenu); 