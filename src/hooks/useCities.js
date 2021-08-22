import useSWR from "swr";
import get from "lodash/fp/get";
import map from "lodash/fp/map";
import { getWeatherData } from "../api/OpenWeatherMap";

const CITIES = [
  "2158177", // Melbourne
  "2147714", // Sydney
  "2174003", // Brisbane
  "2078025", // Adelaide
  "2172517", // Canberra
  "2063523", // Perth
  "2073124", // Darwin
  "2163355", // Hobart
];

export const dataToCity = (data) => ({
  id: data.id,
  name: data.name,
  description: get(["weather", 0, "description"], data),
  temperature: {
    current: get(["main", "temp"], data),
    max: get(["main", "temp_max"], data),
    min: get(["main", "temp_min"], data),
  },
  icon: {
    url: `http://openweathermap.org/img/wn/${get(
      ["weather", 0, "icon"],
      data
    )}@2x.png`,
    description: get(["weather", 0, "main"], data),
  },
});

const fetcher = (deps) => () =>
  getWeatherData(deps)(CITIES.join(","))
    .then(get("list"))
    .then(map(dataToCity));

const useCities = (deps) => {
  const { data, error } = useSWR("cities", fetcher(deps));

  return {
    cities: data,
    loading: !error && !data,
    error: error,
  };
};

export default useCities;
