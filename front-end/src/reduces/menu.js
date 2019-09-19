import { SET_MENU } from './../actions';
import { createSelector } from 'reselect';


export const menu = (state = {}, action) => {
    switch (action.type) {
        case SET_MENU:
            const { buttons } = action.value;
            return { ...state, buttons: buttons }
        default:
            break;
    }
    return state;
}

/*
export const getForecastDataFromCities = createSelector(
    (state,city) => state[city] && state[city].forecastData, forecastData => forecastData);
*/
export const getMenu = createSelector(
    state => {}, menu => menu );