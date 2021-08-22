import { getWeatherData } from "./OpenWeatherMap";

it("should call fetch with the correct url", () => {
  const json = jest.fn().mockReturnValue("test");
  const fetch = jest.fn().mockResolvedValue({ json });
  const env = { REACT_APP_API_KEY: "key", REACT_APP_UNITS: "metric" };
  const deps = { fetch, env };

  return getWeatherData(deps)("1,2").then((result) => {
    expect(result).toBe("test");
    expect(fetch).toBeCalledWith(
      "https://api.openweathermap.org/data/2.5/group?id=1,2&appid=key&units=metric"
    );
  });
});
