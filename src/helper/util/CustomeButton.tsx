import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { heightFromPercentage,scaledSize } from './Utilities'

export default function CustomeButton({ name, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.view}>
        <Text style={styles.buttonName}>{name}</Text>
      </View>
    </TouchableOpacity>

  )
}
const styles = StyleSheet.create({
  view: {
    height: heightFromPercentage(8),
    backgroundColor: '#4539aa',
    marginTop: scaledSize(26),
    borderRadius: scaledSize(8),
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonName:{
    fontSize: scaledSize(17), 
    fontWeight: 'bold', 
    color: 'white'
    

  }

})