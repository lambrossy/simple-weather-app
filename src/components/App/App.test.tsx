import { render } from "@testing-library/react";
import * as SWR from "swr";
import App from "./App";

const dependencies = { fetch: () => Promise.resolve(true), env: {} };
const swr = {
  data: undefined,
  revalidate: () => Promise.resolve(false),
  mutate: () => Promise.resolve(false),
  isValidating: false,
};

const cities = [
  {
    id: 2158177,
    name: "Melbourne",
    description: "overcast clouds",
    temperature: { current: 13.06, max: 13.97, min: 11.14 },
    icon: {
      url: "http://openweathermap.org/img/wn/04n@2x.png",
      description: "Clouds",
    },
  },
  {
    id: 2147714,
    name: "Sydney",
    description: "clear sky",
    temperature: { current: 14.15, max: 16, min: 11.84 },
    icon: {
      url: "http://openweathermap.org/img/wn/01n@2x.png",
      description: "Clear",
    },
  },
  {
    id: 2174003,
    name: "Brisbane",
    description: "clear sky",
    temperature: { current: 15.25, max: 16.59, min: 12.94 },
    icon: {
      url: "http://openweathermap.org/img/wn/01n@2x.png",
      description: "Clear",
    },
  },
  {
    id: 2078025,
    name: "Adelaide",
    description: "clear sky",
    temperature: { current: 11.3, max: 13.25, min: 9.71 },
    icon: {
      url: "http://openweathermap.org/img/wn/01n@2x.png",
      description: "Clear",
    },
  },
  {
    id: 2172517,
    name: "Canberra",
    description: "overcast clouds",
    temperature: { current: 10.9, max: 11.82, min: 8.92 },
    icon: {
      url: "http://openweathermap.org/img/wn/04n@2x.png",
      description: "Clouds",
    },
  },
  {
    id: 2063523,
    name: "Perth",
    description: "clear sky",
    temperature: { current: 13.11, max: 15.44, min: 11.55 },
    icon: {
      url: "http://openweathermap.org/img/wn/01n@2x.png",
      description: "Clear",
    },
  },
  {
    id: 2073124,
    name: "Darwin",
    description: "clear sky",
    temperature: { current: 25.57, max: 25.99, min: 23.92 },
    icon: {
      url: "http://openweathermap.org/img/wn/01n@2x.png",
      description: "Clear",
    },
  },
  {
    id: 2163355,
    name: "Hobart",
    description: "few clouds",
    temperature: { current: 11.06, max: 11.81, min: 9.04 },
    icon: {
      url: "http://openweathermap.org/img/wn/02n@2x.png",
      description: "Clouds",
    },
  },
];

it("renders loading state correctly", () => {
  jest.spyOn(SWR, "default").mockReturnValue(swr);
  const screen = render(<App dependencies={dependencies} />);
  expect(screen.asFragment()).toMatchSnapshot();
});

it("renders error state correctly", () => {
  jest.spyOn(SWR, "default").mockReturnValue({ ...swr, error: true });
  const screen = render(<App dependencies={dependencies} />);
  expect(screen.asFragment()).toMatchSnapshot();
});

it("renders success state correctly", () => {
  jest.spyOn(SWR, "default").mockReturnValue({ ...swr, data: cities });
  const screen = render(<App dependencies={dependencies} />);
  expect(screen.asFragment()).toMatchSnapshot();
});
