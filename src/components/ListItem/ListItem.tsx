import { Text, View } from 'react-native';
import { styles } from './ListItem.styles';

type ListItemProps = {
  icon: string;
  label: string;
  value: string;
};

export const ListItem = ({ icon, label, value }: ListItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.icon}>{icon}</Text>
        <Text style={styles.label}>{label}</Text>
      </View>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};
