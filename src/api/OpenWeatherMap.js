import get from "lodash/fp/get";

const BASE_URL = "https://api.openweathermap.org/data/2.5";

const key = get("REACT_APP_API_KEY");
const units = get("REACT_APP_UNITS");

export const getWeatherData = ({ fetch, env }) => (cityIds) =>
  fetch(
    `${BASE_URL}/group?id=${cityIds}&appid=${key(env)}&units=${units(env)}`
  ).then((response) => response.json());
