import { WeatherData } from 'src/api/weather';

export enum Routes {
  CityList = 'CityList',
  WeatherDetails = 'WeatherDetails',
}

export type RootStackParamList = {
  [Routes.CityList]: undefined;
  [Routes.WeatherDetails]: {
    weatherData: WeatherData;
  };
};
