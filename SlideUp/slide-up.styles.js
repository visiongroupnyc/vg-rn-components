import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const styles = StyleSheet.create({
  slide_up_overlay: {
    backgroundColor: '#00000050',
    flex: 1,
    position: 'relative',
    flexDirection: 'column-reverse',
  },
  slide_up__animated: {
    position: 'absolute',
    width: '100%',
    backgroundColor: '#FFF',
    paddingTop: 32,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    maxHeight: Dimensions.get('screen').height - 100,
  },
  slide_up__action: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: 36,
    height: 36,
  },
  slide_up__close_icon: {
    width: 24,
    height: 24,
  },
  menu_option: {
    height: 30,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    alignContent: 'flex-end',
    paddingHorizontal: 16,
    padding: 5,
  },
});

export default styles;
