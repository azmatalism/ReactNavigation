import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Icon from '../../constants/Icon';
import {colors} from '../../constants';
import {globalStyles} from '../../constants/global';

const {height, width} = Dimensions.get('window');
const Button = ({
  title,
  onPress,
  background,
  opacity,
  color,
  marginVertical,
  font,
  customTitleStyle,
  icon,
  name,
  iconFamily,
  iconColor,
  btnCustomStyle,
  size,
  redBorderColor,
  disabled,
  Loading,
  backgroundColor,
}: any) => {
  return (
    <TouchableOpacity
      onPress={disabled ? null : onPress}
      activeOpacity={disabled ? 1 : 0.4}
      style={[
        styles.button,
        btnCustomStyle,
        background && styles.button2,
        {opacity: opacity ? opacity : null},
        {marginVertical: marginVertical ? marginVertical : null},
        font && {
          borderWidth: 1,
          borderColor: colors.primary,
          elevation: 4,
          borderRadius: 15,
          height: 47,
          width: width / 3.7,
        },
        backgroundColor && {backgroundColor: backgroundColor},
        redBorderColor && {borderColor: colors.danger},
        disabled && styles.buttonDisabled,
      ]}>
      {!Loading ? (
        <>
          {icon ? (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={{marginTop: 5}}>
                <Icon
                  name={name}
                  iconFamily={iconFamily}
                  size={size}
                  color={iconColor}
                />
              </View>
              <Text
                style={[
                  styles.titleText,
                  background ? {color: colors.primary} : {color: colors.white},
                  color ? {color: colors.primary} : null,
                  font
                    ? {
                        color: colors.black,
                        fontFamily: globalStyles.fontFamily400,
                        fontSize: 13,
                      }
                    : null,
                  customTitleStyle ? customTitleStyle : null,
                ]}>
                {title}
              </Text>
            </View>
          ) : (
            <Text
              style={[
                styles.titleText,
                background ? {color: colors.primary} : {color: colors.white},
                color ? {color: colors.primary} : null,
                font
                  ? {
                      color: colors.black,
                      fontFamily: globalStyles.fontFamily400,
                      fontSize: 13,
                    }
                  : null,
                customTitleStyle ? customTitleStyle : null,
              ]}>
              {title}
            </Text>
          )}
        </>
      ) : (
        <ActivityIndicator
          size={'small'}
          color={background ? colors.gray : colors.white}
        />
      )}
    </TouchableOpacity>
  );
};

export default Button;
