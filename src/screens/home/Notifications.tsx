import React from 'react'
import { View, Text } from 'react-native'
import { COLORS } from '../../constants'

function Notifications () {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.bgColor,
      }}>
      <Text>Notification!</Text>
    </View>
  )
}

export default Notifications