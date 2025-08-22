import { Routes } from './routes';

export type RootStackParamList = {
  [Routes.CityList]: undefined;
  [Routes.WeatherDetails]: {
    weatherData: Weather.API.WeatherData;
  };
};
