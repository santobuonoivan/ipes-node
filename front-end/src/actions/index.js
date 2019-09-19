export const SET_MENU = 'SET_MENU';
export const SET_WHAT_RENDER = 'SET_WHAT_RENDER';


export const setMenu = payload => ({ type: SET_MENU, payload});
export const setWhatRender = payload => ({ type: SET_WHAT_RENDER, payload});

/*
    export const setSelectedCity = payload => {
    return dispatch => {
        const url_forecast = `${url_base_forecast}?q=${payload}&APPID=${api_key}&units=metric`;
        
        // activar indicador de busqueda en el estado
        dispatch(setCity(payload));
        return fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                // modificar el estado de la promise (fetch)
                dispatch(setForecastData({city: payload, forecastData}))
            }
        );
    }
    };

    export const setWeather = payload => {


        return dispatch => {
            payload.forEach(city => {

                dispatch(getWeatherCity(city));

                const api_weather =  getUrlWeatherByCity(city);
                fetch(api_weather).then( data => {
                    return data.json();
                }).then( weater_data => {
                    const weather = transformWeather(weater_data);
                    dispatch(setWeatherCity({city, weather}));
                });

            });
        }
    };
*/