import {View, Text} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants';

function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.bgColor,
      }}>
      <Text style={{fontSize: 20, textAlign: 'center'}}>Home!</Text>
    </View>
  );
}

export default Home;
