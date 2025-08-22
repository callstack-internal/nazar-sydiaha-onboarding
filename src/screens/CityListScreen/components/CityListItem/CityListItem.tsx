import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { CityWithWeather } from '../../CityListScreen.types';
import { colors } from 'src/constants/colors';
import { styles } from './CityListItem.styles';

type CityListItemProps = {
  item: CityWithWeather;
  onPress: (item: CityWithWeather) => void;
};

export const CityListItem = ({ item, onPress }: CityListItemProps) => {
  const { loading, error, name, temperature } = item;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress(item)}
      disabled={loading || error}
    >
      <View style={styles.wrapper}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.temperatureContainer}>
          {loading ? (
            <ActivityIndicator size="small" color={colors.text.primary} />
          ) : item.error ? (
            <Text style={styles.errorText}>Error</Text>
          ) : (
            <Text style={styles.temperature}>{temperature}°C</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};
