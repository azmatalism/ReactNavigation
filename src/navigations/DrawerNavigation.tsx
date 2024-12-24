import React from 'react';
import {Wallet, Notifications} from '../screens';
import {COLORS, ICONS, ROUTES} from '../constants';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        //Hide All Drawer Screen Header
        headerShown: true,
        // Selected item or screen background color
        drawerActiveBackgroundColor: COLORS.primary,
        // Selected item or screen name color
        drawerActiveTintColor: COLORS.white,
        drawerLabelStyle: {
          // Label marginLeft
          marginLeft: -5,
        },
      }}>
      {/*** BottomTabNavigator is to be Nested within the DrawerNavigator ***/}
      {/* <Drawer.Screen name={ROUTES.HOME_DRAWER}
                component={BottomTabNavigator} options={{
                    title: 'Home',
                    drawerIcon: ({ focused, color, size }) => (
                        <Icon name="home-sharp" size={22} color={color} />
                    ),
                }}/> */}
      <Drawer.Screen
        name={ROUTES.WALLET_DRAWER}
        component={Wallet}
        options={{
          title: 'Wallet',
          drawerIcon: ({focused, color, size}) => (
            <ICONS
              iconFamily="ionicons"
              name="wallet"
              size={22}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={ROUTES.NOTIFICATIONS_DRAWER}
        component={Notifications}
        options={{
          title: 'Notifications',
          drawerIcon: ({focused, color, size}) => (
            <ICONS
              iconFamily="ionicons"
              name="notifications"
              size={22}
              color={color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
export default DrawerNavigation;
