import { Text, View } from 'react-native';
import { styles } from './TemperatureTile.styles';

type TemperatureTileProps = {
  temp: number;
  label: string;
};

export const TemperatureTile = ({ temp, label }: TemperatureTileProps) => {
  const tempValue = Math.round(temp);

  return (
    <View style={styles.container}>
      <Text style={styles.value}>{tempValue}°C</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};
