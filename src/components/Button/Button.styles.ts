import { StyleSheet } from 'react-native';
import { colors } from 'src/constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginHorizontal: 16,
    marginVertical: 20,
    alignItems: 'center',
  },
  text: {
    color: colors.text.quaternary,
    fontSize: 16,
    fontWeight: '600',
  },
});
