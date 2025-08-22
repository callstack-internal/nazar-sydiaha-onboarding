import { StyleSheet } from 'react-native';
import { colors } from 'src/constants/colors';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text.primary,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: colors.text.secondary,
    textAlign: 'center',
  },
});
