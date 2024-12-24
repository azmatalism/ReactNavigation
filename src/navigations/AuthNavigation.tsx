import React from 'react';
import {} from 'react-native';
import {Login, ForgotPassword, Register} from '../screens';
import {COLORS, ROUTES} from '../constants';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigation from './DrawerNavigation';

const Stack = createNativeStackNavigator();

function AuthNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        // statusBarColor: COLORS.primary,
        headerTintColor: COLORS.white,
        headerTitleAlign: 'center',
        // headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
      }}
      initialRouteName={ROUTES.LOGIN}>
      <Stack.Screen name={ROUTES.LOGIN} component={Login} />
      <Stack.Screen name={ROUTES.FORGOT_PASSWORD} component={ForgotPassword} />
      <Stack.Screen name={ROUTES.REGISTER} component={Register} />
      <Stack.Screen
        name={ROUTES.HOME}
        component={DrawerNavigation}
        //Hide All Bottom Tab Screen Header
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigation;
