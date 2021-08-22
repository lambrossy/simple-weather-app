export type CityGroupResponseData = {
  list: CityResponseData[];
};

export type CityResponseData = {
  id: number;
  name: string;
  weather: CityItemResponseData[];
};

export type CityItemResponseData = {
  description: string;
  icon: string;
  main: string;
};
