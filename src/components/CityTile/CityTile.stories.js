import React from "react";
import CityTile from "./CityTile";

export default {
  title: "Example/CityTile",
  component: CityTile,
};

const Template = (args) => <CityTile {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  id: 2163355,
  name: "Hobart",
  description: "few clouds",
  temperature: { current: 11.28, max: 12.37, min: 9.51 },
  icon: {
    url: "http://openweathermap.org/img/wn/02n@2x.png",
    description: "Clouds",
  },
};
