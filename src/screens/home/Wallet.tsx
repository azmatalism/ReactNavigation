import { View, Text } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants'

function Wallet () {
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.bgColor,
      }}>
      <Text>Wallet</Text>
    </View>
  )
}

export default Wallet