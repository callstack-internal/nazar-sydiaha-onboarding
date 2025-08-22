import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/types/navigation/paramLists';
import { Routes } from 'src/types/navigation/routes';

export type CityListScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, Routes.CityList>;
};

export type CityWithWeather = {
  temperature?: number;
  loading?: boolean;
  error?: boolean;
} & Weather.Place.City;
