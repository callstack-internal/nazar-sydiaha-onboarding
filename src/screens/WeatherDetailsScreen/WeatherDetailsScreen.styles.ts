import { StyleSheet } from 'react-native';
import { colors } from 'src/constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.secondary,
  },
  detailsContainer: {
    paddingHorizontal: 16,
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    marginVertical: 4,
    borderRadius: 12,
    shadowColor: colors.shadow.primary,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  detailLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  detailLabel: {
    fontSize: 16,
    color: colors.text.primary,
    fontWeight: '500',
  },
  detailValue: {
    fontSize: 16,
    color: colors.text.tertiary,
    fontWeight: 'bold',
  },
});
