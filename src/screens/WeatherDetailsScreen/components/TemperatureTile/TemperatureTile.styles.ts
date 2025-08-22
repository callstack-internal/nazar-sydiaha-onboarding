import { StyleSheet } from 'react-native';
import { colors } from 'src/constants/colors';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: 'white',
    marginHorizontal: 16,
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: colors.shadow.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  value: {
    fontSize: 48,
    fontWeight: 'bold',
    color: colors.text.tertiary,
    marginBottom: 8,
  },
  label: {
    fontSize: 18,
    color: colors.text.secondary,
    fontWeight: '500',
  },
});
