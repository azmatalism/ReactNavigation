import {
  FlatList,
  Modal,
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import i18n, {languageResources} from '../../../services/i18n';
import {useTranslation} from 'react-i18next';
import i18next from '../../../services/i18n';
import languagesList from '../../../services/languagesList.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Gradient from '../../components/gradient/Gradient';
import Icon from '../../constants/Icon';
import {COLORS, IMGS} from '../../constants';

const SelectLanguage = ({navigation}: any) => {
  const {t} = useTranslation();
  const [selectedData, setSelectedData] = useState('english');
  console.log('Language', selectedData);

  const [label, setLabel] = useState('English');
  const [isPickerVisible, setIsPickerVisible] = useState(false);

  const changeLng = async (lng: any, name: any) => {
    i18next.changeLanguage(lng);
    await AsyncStorage.setItem('settings.lang', lng);
    setSelectedData(name);
    setLabel(name);
    setIsPickerVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Gradient style={styles.bcImage}>
        <Image style={styles.logo} source={IMGS.icon} />

        <View>
          <Pressable
            onPress={() => setIsPickerVisible(true)}
            style={{
              borderWidth: 1.55,
              borderRadius: 6.99,
              borderColor: COLORS.dimGray,
              padding: 5,
              justifyContent: 'center',
              marginBottom: 17,
              height: 54.367,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginLeft: 10,
              }}>
              <Text
                style={{
                  color: COLORS.textColor,
                  fontWeight: '400',
                  fontSize: 18,
                }}>
                {label}
              </Text>
              <TouchableOpacity
                style={{alignSelf: 'flex-end'}}
                onPress={() => setIsPickerVisible(true)}>
                <Icon
                  name={'chevron-down'}
                  size={22}
                  color={COLORS.textColor}
                />
              </TouchableOpacity>
            </View>
          </Pressable>
          <Text style={{color: COLORS.textColor}}>{t('welcome')}</Text>
          <Text style={{color: COLORS.textColor}}>{t('licenseAgg')}</Text>
        </View>
      </Gradient>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isPickerVisible}
        onRequestClose={() => setIsPickerVisible(false)}>
        <Pressable style={styles.modalBackground}>
          <View style={styles.overlay}>
            <View style={styles.modalBackground}>
              <View style={styles.modalView}>
                {/* <FlatList
                  data={Object.keys(languageResources)}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      onPress={() => changeLng(item, languagesList[item].name)}>
                      <Text
                        style={{
                          color: COLORS.textColor,
                          padding: 5,
                          marginLeft: 10,
                        }}>
                        {languagesList[item].nativeName}
                      </Text>
                    </TouchableOpacity>
                  )}
                /> */}
                <FlatList
                  data={Object.keys(languageResources)}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      onPress={() =>
                        changeLng(
                          item as keyof typeof languagesList,
                          languagesList[item as keyof typeof languagesList]
                            .name,
                        )
                      }>
                      <Text
                        style={{
                          color: COLORS.textColor,
                          padding: 5,
                          marginLeft: 10,
                        }}>
                        {
                          languagesList[item as keyof typeof languagesList]
                            .nativeName
                        }
                      </Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>
          </View>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
};

export default SelectLanguage;
