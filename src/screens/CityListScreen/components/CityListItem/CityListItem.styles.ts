import { StyleSheet } from 'react-native';
import { colors } from 'src/constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.secondary,
    borderRadius: 12,
    padding: 16,
    marginVertical: 6,
    shadowColor: colors.shadow.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.text.primary,
  },
  temperatureContainer: {
    minWidth: 60,
    alignItems: 'flex-end',
  },
  temperature: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text.tertiary,
  },
  errorText: {
    fontSize: 14,
    color: colors.text.error,
  },
});
