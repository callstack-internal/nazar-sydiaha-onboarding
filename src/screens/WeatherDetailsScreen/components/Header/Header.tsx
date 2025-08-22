import { Text, View } from 'react-native';
import { styles } from './Header.styles';

type HeaderProps = {
  cityName: string;
  weatherDescription: string;
};

export const Header = ({ cityName, weatherDescription }: HeaderProps) => {
  const formatWeatherDescription = (description: string) => {
    return description.charAt(0).toUpperCase() + description.slice(1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{cityName}</Text>
      <Text style={styles.description}>
        {formatWeatherDescription(weatherDescription)}
      </Text>
    </View>
  );
};
