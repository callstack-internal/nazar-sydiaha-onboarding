import { Text, View } from 'react-native';
import { styles } from './Header.styles';
import { formatFirstLargeLetter } from 'src/utils/text';

type HeaderProps = {
  cityName: string;
  weatherDescription: string;
};

export const Header = ({ cityName, weatherDescription }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{cityName}</Text>
      <Text style={styles.description}>
        {formatFirstLargeLetter(weatherDescription)}
      </Text>
    </View>
  );
};
