import { Weather } from "../requests/api-key";

const LOAD_WEATHER = "LOAD_WEATHER";

const initialState = {
  isLoad: true,
  address: null,
  temp: null,
  description: null,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_WEATHER:
      return {
        isLoad: false,
        address: action.address,
        temp: action.temp,
        description: action.description,
      };
    default:
      return state;
  }
};

const updateWeather = (address, temp, description) => ({
  type: LOAD_WEATHER,
  address,
  temp,
  description,
});

/*====MiddleWare===========================*/
export const loadWeather = () => (dispatch) => {
  Weather.loadWeather().then((r) =>
    dispatch(
      updateWeather(r.data.address, r.data.days[0].temp, r.data.description)
    )
  );
};

export default weatherReducer;
