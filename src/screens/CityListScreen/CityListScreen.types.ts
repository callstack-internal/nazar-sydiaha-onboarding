import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { City } from 'src/api/weather';
import { RootStackParamList, Routes } from 'src/navigation/types';

export type CityListScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, Routes.CityList>;
};

export type CityWithWeather = {
  temperature?: number;
  loading?: boolean;
  error?: boolean;
} & City;
