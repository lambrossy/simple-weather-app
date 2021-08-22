import { render } from "@testing-library/react";
import CityTile from "./CityTile";

const props = {
  id: "2163355",
  name: "Hobart",
  description: "few clouds",
  temperature: { current: 11.28, max: 12.37, min: 9.51 },
  icon: {
    url: "http://openweathermap.org/img/wn/02n@2x.png",
    description: "Clouds",
  },
};

it("renders correctly", () => {
  const element = render(<CityTile {...props} />);
  expect(element.container).toMatchSnapshot();
});
