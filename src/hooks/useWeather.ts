import { useEffect, useState } from 'react';
import { getWeatherForCity } from 'src/api/weather';
import { citiesList } from 'src/constants/cities';
import { CityWithWeather } from 'src/screens/CityListScreen';

export const useWeather = () => {
  const [cities, setCities] = useState<CityWithWeather[]>(
    citiesList.map(city => ({ ...city, loading: true })),
  );

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

  useEffect(() => {
    loadWeatherData();
  }, []);

  return {
    cities,
  };
};
