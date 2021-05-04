import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header_container: {
    width: '100%',
    height: 48,
    marginTop: Constants.statusBarHeight,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingHorizontal: 8,
    borderBottomColor: '#00000020',
    borderBottomWidth: 1,
  },
  header_left: {
    flex: 1,
    alignItems: 'flex-start',
  },
  header_center: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
  },
  header_right: {
    flex: 1,
    justifyContent: 'space-between',
  },

  header__menu_button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header__menu_button__icon: {
    width: 24,
    height: 24,
  },

  header__back_button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header__back_button__icon: {
    width: 24,
    height: 24,
  },
  header__back_button__text: {
    color: '#0070F3',
    fontSize: 16,
  },

  header__center__text: {
    fontSize: 18,
    fontWeight: '500',
  },
});
