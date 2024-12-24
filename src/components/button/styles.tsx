import {StyleSheet} from 'react-native';
import {colors} from '../../constants';
import {globalStyles} from '../../constants/global';

export const styles = StyleSheet.create({
  button: {
    height: 48,
    // width: '100%',
    borderRadius: 32,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',

    // opacity: 0.25,
  },
  button2: {
    height: 45,
    // width: '100%',
    borderRadius: 32,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.primary,
  },

  titleText: {
    fontSize: 22,
    fontFamily: globalStyles.fontFamily500,
  },
  buttonDisabled: {
    backgroundColor: colors.gray,
    borderColor: colors.gray,
  },
});
