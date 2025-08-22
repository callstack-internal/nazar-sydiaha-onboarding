import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CityListScreen from 'src/screens/CityListScreen/CityListScreen';
import { WeatherDetailsScreen } from 'src/screens/WeatherDetailsScreen';
import { styles } from './AppNavigator.styles';
import { RootStackParamList, Routes } from '../types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Routes.CityList}
        screenOptions={{
          headerStyle: styles.navigatorHeader,
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name={Routes.CityList}
          component={CityListScreen}
          options={{
            title: 'Cities',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name={Routes.WeatherDetails}
          component={WeatherDetailsScreen}
          options={{
            title: '',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
