
import React,{useState} from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { heightFromPercentage, scaledSize } from '../../helper/util/Utilities'

export default function InputField({ Placeholder, props, value, handleChange,keyBoardType }) {
    const [fieldIsFocus,setFieldIsFocus] = useState(false)
    return (
        <View style={[styles.view,{borderColor:fieldIsFocus?'#4539aa':'#e1e1e4'}]}>
            <TextInput placeholder={Placeholder}
                style={styles.textInput}
                onChangeText={props ? props.handleChange(value) : handleChange(value)}
                placeholderTextColor= '#797979'
                onFocus={()=>setFieldIsFocus(true)}
                onBlur={()=>setFieldIsFocus(false)}
                keyboardType={keyBoardType}

            />
        </View>

    )
}

const styles = StyleSheet.create({
    view:{
        height: heightFromPercentage(9), 
        borderWidth: scaledSize(1.5),
        borderRadius: scaledSize(8), 
        borderColor: '#e1e1e4',
         marginTop: scaledSize(14) 
    },
    textInput: {
        textAlign: 'left',
        marginTop: scaledSize(6),
        fontSize: scaledSize(16), 
        marginLeft: scaledSize(10),
       

    }
})