type CityWeather = {
  id: string;
  name: string;
  icon: {
    url: string;
    description: string;
  };
  temperature: {
    current: number;
    min: number;
    max: number;
  };
  description: string;
};

export default CityWeather;
