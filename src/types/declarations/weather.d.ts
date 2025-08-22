declare namespace Weather {
  namespace API {
    type WeatherData = {
      name: string;
      main: {
        temp: number;
        feels_like: number;
        humidity: number;
        pressure: number;
      };
      weather: {
        main: string;
        description: string;
        icon: string;
      }[];
      wind: {
        speed: number;
      };
    };
  }

  namespace Place {
    type City = {
      id: number;
      name: string;
      lat: number;
      lon: number;
    };
  }
}
