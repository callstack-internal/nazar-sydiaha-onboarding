import React from 'react';
import { View, FlatList, Alert } from 'react-native';
import { styles } from './CityListScreen.styles';
import { CityListScreenProps, CityWithWeather } from './CityListScreen.types';
import { getWeatherForCity } from 'src/api/weather';
import { Routes } from 'src/types/navigation/routes';
import { useWeather } from 'src/hooks/useWeather';
import { CityListItem } from './components/CityListItem';

export const CityListScreen: React.FC<CityListScreenProps> = ({
  navigation,
}) => {
  const { cities } = useWeather();

  const handleCityPress = async (city: Weather.Place.City) => {
    try {
      const weatherData = await getWeatherForCity(city);
      navigation.navigate(Routes.WeatherDetails, { weatherData });
    } catch (error) {
      Alert.alert('Error', 'Failed to load weather details. Please try again.');
    }
  };

  const renderCityItem = ({ item }: { item: CityWithWeather }) => (
    <CityListItem item={item} onPress={handleCityPress} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cities}
        renderItem={renderCityItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};
