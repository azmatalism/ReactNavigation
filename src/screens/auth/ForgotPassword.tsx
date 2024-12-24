import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

function ForgotPassword() {
  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center'}}>ForgotPassword</Text>
    </View>
  );
}

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
