import {initReactI18next} from 'react-i18next';
import en from '../locals/en.json';
import ur from '../locals/ur.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from 'i18next';
const STORE_LANGUAGE_KEY = 'settings.lang';

// Language detector plugin
const languageDetector = {
  type: 'languageDetector' as const,
  async: true,
  init: () => {},
  detect: async function (callback: (lang: string) => void) {
    try {
      // get stored language from Async storage
      // put your own language detection logic here
      await AsyncStorage.getItem(STORE_LANGUAGE_KEY).then(language => {
        if (language) {
          //if language was stored before, use this language in the app
          return callback(language);
        } else {
          //if language was not stored yet, use english
          return callback('en');
        }
      });
    } catch (error) {
      console.log('Error reading language', error);
    }
  },
  cacheUserLanguage: async function (language: string) {
    try {
      //save a user's language choice in Async storage
      await AsyncStorage.setItem(STORE_LANGUAGE_KEY, language);
    } catch (error) {}
  },
};

export const languageResources = {
  en: {translation: en},
  ur: {translation: ur},
};

i18n
  .use(initReactI18next)
  .use(languageDetector)
  .init({
    resources: languageResources,
    compatibilityJSON: 'v4',
    // fallback language is set to english
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
