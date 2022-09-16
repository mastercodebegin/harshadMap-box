import React, { useRef } from 'react'
import { View, TextInput, Text, SafeAreaView, StyleSheet, ScrollView, TouchableWithoutFeedback, Image, TouchableOpacity } from 'react-native'
import CodeInput from 'react-native-confirmation-code-input';
import { styles } from '../login/LoginStyle';
import { CheckBox } from 'react-native-elements'
import { Formik } from 'formik'
import * as Yup from 'yup'
import LogoIcon from '../../assets/images/logo__1_.png'
import { heightFromPercentage, scaledSize, widthFromPercentage } from '../../helper/util/Utilities'
import InputField from '../../helper/util/InputFields';
import CustomeButton from '../../helper/util/CustomeButton';




const loginSchema = Yup.object({

    email: Yup.string().required().email(),
    password: Yup.string().required()
})



export default function Otp() {
    const codeInputRef1 = useRef()
    return (

        // Required for all blocks
        <ScrollView keyboardShouldPersistTaps="always" style={styless.container}>
            {/* Required for all blocks */}
            <TouchableWithoutFeedback
                testID={"Background"}
            >
                {/* Customizable Area Start */}
                {/* Merge Engine UI Engine Code */}
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={loginSchema}
                    onSubmit={(values) => console.log('values>>>>>>>', values)}
                >
                    {(props) => (
                        <View>

                            {/* <Text style={styles.titleWhySignUp}>
                        {this.state.labelHeader}</Text> */}
                            <View style={{ height: heightFromPercentage(23), backgroundColor: null, marginLeft: 10 }}>
                                <Image source={LogoIcon} resizeMode={'contain'} style={styles.logo} />
                                <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: 20, color: 'black' }}>OTP Verification</Text>
                                <Text style={{ fontSize: 15, marginTop: 8 }}>See your growth and get consulting support</Text>
                            </View>

                            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: null }}>

                                <View style={[styless.passwordFieldMainView, { marginTop: 40, }]}>
                                    <TextInput placeholder={'hardenrahul@gmail.com'}
                                        style={styless.passwordInputField}
                                        placeholderTextColor={'#797979'}
                                        onChangeText={props.handleChange('password')}
                                    />
                                    <Text style={{ fontSize: 14, fontWeight: '700', marginRight: 20, color: '#4539aa' }}>Change</Text>
                                </View>
                                <View style={{ marginLeft: scaledSize(24) }}>
                                    <CodeInput
                                        ref={codeInputRef1}
                                        activeColor={'blue'}
                                        inactiveColor={'gray'}
                                        // secureTextEntry
                                        className={'border-b'}
                                        space={20}
                                        size={scaledSize(40)}
                                        codeLength={6}
                                        cellBorderWidth={1}
                                        inputPosition='left'
                                        codeInputStyle={styless.text}
                                        onFulfill={(code) => console.log(code)}
                                    // style={{...styles,marginLeft:10}}
                                    />
                                </View>
                            </View>

                            <View style={{ marginTop: scaledSize(80) }}>
                                <CustomeButton onPress={() => props.handleSubmit()} name={'Submit'} />
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: scaledSize(125) }}>
                                <Text style={{ fontWeight: '400', color: 'black' }}>Remember Password?</Text>
                                <Text style={[styless.blueTextStyle, { marginTop: 4 }]}>Login</Text>
                                <Text></Text>
                            </View>
                        </View>
                    )}
                </Formik>
                {/* Merge Engine UI Engine Code */}
                {/* Customizable Area End */}
            </TouchableWithoutFeedback>

















            {/* <CodeInput
      ref={codeInputRef1}
      activeColor={'blue'}
      inactiveColor={'gray'}
      secureTextEntry
      className={'border-b'}
      space={20}
      size={40}
      codeLength={6}
      cellBorderWidth={1}
      inputPosition='left'
      codeInputStyle={styless.text}
      onFulfill={(code) => console.log(code)}
    /> */}


        </ScrollView>

    )
}

const styless = StyleSheet.create({
    text: {
        fontSize: 30,
        color: 'black'

    },
    container: {
        flex: 1,
        padding: 16,
        marginLeft: "auto",
        marginRight: "auto",
        width: Platform.OS === "web" ? "75%" : "100%",
        maxWidth: 650,
        backgroundColor: "#ffffffff"
    },

    passwordFieldMainView: {
        height: heightFromPercentage(8),
        borderWidth: scaledSize(1.5),
        borderRadius: scaledSize(8),
        borderColor: '#e1e1e4',
        // marginTop: scaledSize(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: widthFromPercentage(85)
    },
    passwordInputField: {
        textAlign: 'left',
        marginTop: scaledSize(2),
        fontSize: scaledSize(16),
        marginLeft: scaledSize(10),
        width: '70%',

    },
    errorMessaegeText: {
        color: 'red',
        fontSize: scaledSize(14),
        fontWeight: '600',
        marginLeft: scaledSize(6)

    },
    logo: {
        height: heightFromPercentage(10),
        width: widthFromPercentage(10)
    },
    blueTextStyle: {
        fontSize: 14,
        fontWeight: '700',
        marginRight: 20,
        color: '#4539aa'
    }

})

