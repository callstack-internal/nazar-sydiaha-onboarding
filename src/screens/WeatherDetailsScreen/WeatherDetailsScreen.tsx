import React from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from './WeatherDetailsScreen.styles';
import { ListItem } from 'src/components/ListItem';
import { TemperatureTile } from './components/TemperatureTile';
import { Header } from './components/Header';
import { WeatherDetailsScreenProps } from './WeatherDetailsScreen.types';
import { Button } from 'src/components/Button/Button';

export const WeatherDetailsScreen: React.FC<WeatherDetailsScreenProps> = ({
  navigation,
  route,
}) => {
  const { weatherData } = route.params;

  const weatherDetails = [
    {
      label: 'Temperature',
      value: `${Math.round(weatherData.main.temp)}°C`,
      icon: '🌡️',
    },
    {
      label: 'Feels Like',
      value: `${Math.round(weatherData.main.feels_like)}°C`,
      icon: '🤔',
    },
    {
      label: 'Humidity',
      value: `${weatherData.main.humidity}%`,
      icon: '💧',
    },
    {
      label: 'Pressure',
      value: `${weatherData.main.pressure} hPa`,
      icon: '📊',
    },
    {
      label: 'Wind Speed',
      value: `${weatherData.wind.speed} m/s`,
      icon: '💨',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Header
        cityName={weatherData.name}
        weatherDescription={weatherData.weather[0].description}
      />
      <TemperatureTile
        temp={weatherData.main.temp}
        label={weatherData.weather[0].main}
      />
      <View style={styles.detailsContainer}>
        {weatherDetails.map((detail, index) => (
          <ListItem key={index} {...detail} />
        ))}
      </View>
      <Button text="Back to Cities" onPress={() => navigation.goBack()} />
    </ScrollView>
  );
};
