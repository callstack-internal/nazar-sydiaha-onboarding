import { StyleSheet } from 'react-native';
import { colors } from 'src/constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.secondary,
  },
  listContainer: {
    padding: 16,
  },
  cityItem: {
    backgroundColor: 'white',
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
  cityInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cityName: {
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
