import React from 'react'
import { View, Text, TouchableNativeFeedback, StyleSheet } from 'react-native'

export default function CustomButton({title,onPress}) {
    return (
        <TouchableNativeFeedback onPress={onPress }>
        <View style={[styles.submitButtonView,
        ]}>
            <Text style={styles.textcolor}>{title}</Text>
        </View>
    </TouchableNativeFeedback>
)
}

const styles = StyleSheet.create({
    submitButtonView:{
        height: 40,
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 20,
        backgroundColor: '#22d1aa',
         width: '50%', borderRadius: 8

    },
    textcolor:{
        color: 'white', 
        fontSize: 15, 
        fontWeight:'bold'
    } 
})