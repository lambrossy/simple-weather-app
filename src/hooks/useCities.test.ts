import { AppDependencies } from "../interfaces/AppDependencies";
import useCities, { dataToCity } from "./useCities";

const data = {
  weather: [{ main: "Clear", description: "clear sky", icon: "20.08" }],
  main: {
    temp: 22.48,
    temp_min: 20.08,
    temp_max: 23.81,
  },
  id: 2174003,
  name: "Brisbane",
};

it("should call fetcher once", () => {
  const deps: AppDependencies = {
    fetch: jest.fn().mockResolvedValue({ json: () => data }),
    env: {},
  };
  useCities(deps);
  expect(deps.fetch).toHaveBeenCalledTimes(1);
});

it("should convert data to cities correctly", () => {
  const result = dataToCity(data);
  expect(result).toStrictEqual({
    id: "2174003",
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
