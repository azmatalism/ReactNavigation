import React from 'react'
import {SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../../constants'

function Profile () {
  return (
    <SafeAreaView  style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.bgColor,
      }}>
      <Text>Profile</Text>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({})