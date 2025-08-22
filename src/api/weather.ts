import { OPEN_WEATHER_API_KEY } from '@env';
import { openWeatherUrl } from 'src/constants/api';

export const getWeatherByCoordinates = async (
  lat: number,
  lon: number,
): Promise<Weather.API.WeatherData> => {
  try {
    const response = await fetch(
      `${openWeatherUrl}/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=metric`,
    );

    if (!response.ok) {
      throw new Error(`Weather API error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

export const getWeatherForCity = async (
  city: Weather.Place.City,
): Promise<Weather.API.WeatherData> => {
  return getWeatherByCoordinates(city.lat, city.lon);
};
