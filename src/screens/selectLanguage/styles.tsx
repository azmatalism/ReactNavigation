import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../constants';
import {globalStyles} from '../../constants/global';
const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bcImage: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'space-around',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  logo: {
    width: width / 1.6,

    height: width / 1.8,
    alignSelf: 'center',
    marginTop: 30,
  },
  scrollV: {flex: 1, justifyContent: 'space-between'},

  link: {
    flexDirection: 'row',
    marginTop: 17,
    alignSelf: 'flex-end',
  },
  link_text: {
    fontSize: 17,
    fontWeight: '400',
  },
  modalBackground: {
    flex: 1,
    // backgroundColor: COLORS.black,
    // alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'center',
  },
  modalView: {
    margin: 17,
    backgroundColor: COLORS.white,
    borderRadius: 21,
    paddingVertical: 18,

    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  optionItem: {
    // backgroundColor: 'red',
    fontFamily: globalStyles.fontFamily500,
    marginVertical: 10,
    color: COLORS.textColor,
    // borderWidth:1,
    paddingHorizontal: 18,
  },
  optionText: {
    fontSize: 16,
    fontFamily: globalStyles.fontFamily400,
    color: COLORS.textColor,
  },
  selectedOptionItem: {
    color: COLORS.lightGray,
  },
});
