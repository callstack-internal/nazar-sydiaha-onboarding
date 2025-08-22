import { Text, View } from 'react-native';
import { styles } from './TemperatureTile.styles';

type TemperatureTileProps = {
  temp: number;
  label: string;
  unit?: 'celsius' | 'fahrenheit';
};

export const TemperatureTile = ({
  temp,
  unit = 'celsius',
  label,
}: TemperatureTileProps) => {
  const tempValue = Math.round(temp);
  const unitSymbol = unit === 'celsius' ? 'C' : 'F';

  return (
    <View style={styles.container}>
      <Text style={styles.value}>
        {tempValue}°{unitSymbol}
      </Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};
