import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { styles } from './CityListScreen.styles';
import { citiesList } from 'src/constants/cities';
import { CityListScreenProps, CityWithWeather } from './CityListScreen.types';
import { City, getWeatherForCity } from 'src/api/weather';
import { colors } from 'src/constants/colors';
import { Routes } from 'src/navigation/types';

export const CityListScreen: React.FC<CityListScreenProps> = ({
  navigation,
}) => {
  const [cities, setCities] = useState<CityWithWeather[]>(
    citiesList.map(city => ({ ...city, loading: true })),
  );

  useEffect(() => {
    loadWeatherData();
  }, []);

  const loadWeatherData = async () => {
    const updatedCities = await Promise.all(
      citiesList.map(async city => {
        try {
          const weatherData = await getWeatherForCity(city);
          return {
            ...city,
            temperature: Math.round(weatherData.main.temp),
            loading: false,
            error: false,
          };
        } catch (error) {
          console.error(`Error loading weather for ${city.name}:`, error);
          return {
            ...city,
            loading: false,
            error: true,
          };
        }
      }),
    );
    setCities(updatedCities);
  };

  const handleCityPress = async (city: City) => {
    try {
      const weatherData = await getWeatherForCity(city);
      navigation.navigate(Routes.WeatherDetails, { weatherData });
    } catch (error) {
      Alert.alert('Error', 'Failed to load weather details. Please try again.');
    }
  };

  const renderCityItem = ({ item }: { item: CityWithWeather }) => (
    <TouchableOpacity
      style={styles.cityItem}
      onPress={() => handleCityPress(item)}
      disabled={item.loading || item.error}
    >
      <View style={styles.cityInfo}>
        <Text style={styles.cityName}>{item.name}</Text>
        <View style={styles.temperatureContainer}>
          {item.loading ? (
            <ActivityIndicator size="small" color={colors.text.primary} />
          ) : item.error ? (
            <Text style={styles.errorText}>Error</Text>
          ) : (
            <Text style={styles.temperature}>{item.temperature}°C</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
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
