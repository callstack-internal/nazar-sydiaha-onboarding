import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList, Routes } from 'src/navigation/types';

export type WeatherDetailsScreenProps = {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    Routes.WeatherDetails
  >;
  route: RouteProp<RootStackParamList, Routes.WeatherDetails>;
};
