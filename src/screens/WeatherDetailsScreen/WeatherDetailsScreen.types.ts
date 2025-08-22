import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from 'src/types/navigation/paramLists';
import { Routes } from 'src/types/navigation/routes';

export type WeatherDetailsScreenProps = {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    Routes.WeatherDetails
  >;
  route: RouteProp<RootStackParamList, Routes.WeatherDetails>;
};
