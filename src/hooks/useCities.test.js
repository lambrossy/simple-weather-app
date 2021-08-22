import useCities, { dataToCity } from "./useCities";

const data = {
  coord: { lon: 153.0281, lat: -27.4679 },
  weather: [
    { id: 800, main: "Clear", description: "clear sky", icon: "20.08" },
  ],
  base: "stations",
  main: {
    temp: 22.48,
    feels_like: 22.32,
    temp_min: 20.08,
    temp_max: 23.81,
    pressure: 1018,
    humidity: 59,
  },
  visibility: 10000,
  wind: { speed: 1.34, deg: 28, gust: 3.58 },
  clouds: { all: 0 },
  dt: 1629528000,
  sys: {
    type: 2,
    id: 2005393,
    country: "AU",
    sunrise: 1629490394,
    sunset: 1629530962,
  },
  timezone: 36000,
  id: 2174003,
  name: "Brisbane",
  cod: 200,
};

it("should call fetcher once", () => {
  const deps = { fetch: jest.fn().mockResolvedValue({ json: () => data }) };
  useCities(deps);
  expect(deps.fetch).toHaveBeenCalledTimes(1);
});

it("should convert data to cities correctly", () => {
  const result = dataToCity(data);
  expect(result).toStrictEqual({
    id: 2174003,
    name: "Brisbane",
    description: "clear sky",
    temperature: {
      current: 22.48,
      max: 23.81,
      min: 20.08,
    },
    icon: {
      url: "http://openweathermap.org/img/wn/20.08@2x.png",
      description: "Clear",
    },
  });
});
