import get from "lodash/fp/get";
import { AppDependencies } from "../interfaces/AppDependencies";

const BASE_URL = "https://api.openweathermap.org/data/2.5";

const key = get("REACT_APP_API_KEY");
const units = get("REACT_APP_UNITS");

export const getWeatherData = ({ fetch, env }: AppDependencies) => (
  cityIds: string
): Promise<Response> =>
  fetch(
    `${BASE_URL}/group?id=${cityIds}&appid=${key(env)}&units=${units(env)}`
  ).then((response: any) => response.json());
