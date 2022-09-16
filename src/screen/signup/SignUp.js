import React, { Component } from 'react'
import {
    View, TextInput, StatusBar, TouchableOpacity,
    Text, StyleSheet, FlatList, ScrollView,
    Image,
    TouchableHighlight,
    TouchableNativeFeedback
} from 'react-native'
// import { Input } from 'react-native-elements'
import headerImage from '../../assets/shop.png'
import inputFieldIconPath from '../../assets/headerImage.png'
import emailIcon from '../../assets/user.png'
import passwordIcon from '../../assets/password.png'


// import CustomIcon from '../../../CustomIcon.js'
import Color from '../../assets/colors/Color';
import CustomeButton from '../../helper/util/CustomeButton'




export default SignUp = ({ navigation }) => {
    // let isFocused=true;
    const [isPasswordShow, setIsPasswordShow] = React.useState(true)
    const [isFullNameFocused, setIsFullNameFocused] = React.useState(false)
    const [isEmailFocused, setIsEmailFocused] = React.useState(false)
    const [isPasswordFocused, setIsPasswordFocused] = React.useState(false)
    const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] = React.useState(false)
    const placeholderColor = 'black'

    // [handleFocus,sethandleFocus] = React.useState(isFocused=false )
    const handleFocus = (value) => {
        if (value == 'fullname') { setIsFullNameFocused(true) }
        else if (value == 'email') { setIsEmailFocused(true) }
        else if (value == 'password') { setIsPasswordFocused(true) }
        else if (value == 'confirmpassword') { setIsConfirmPasswordFocused(true) }

        else { console.warn('didnt get value') }

    }
    const handleBlur = (value) => {
        if (value == 'fullname') { setIsFullNameFocused(false) }
        else if (value == 'email') { setIsEmailFocused(false) }
        else if (value == 'password') { setIsPasswordFocused(false) }
        else if (value == 'confirmpassword') { setIsConfirmPasswordFocused(false) }
        else { console.warn('didnt get value') }
    }
    const PasswordHideAndShow = () => {
        console.warn(isPasswordShow)
        setIsPasswordShow(!isPasswordShow ? true : false)
    }
    const submit = () => {
        console.warn('submit')
    }
    const navigateTo = (route) => {
        navigation.navigate(route)

    }

    // handleBlur = () => this.setState({ isFocused: false })

    return (
        <View style={styles.mainView}>
            <StatusBar backgroundColor={'white'} />
            <View style={styles.header}>
                <Image source={headerImage} style={styles.headerImage} resizeMode={'center'} />
            </View>
            <ScrollView>
                <View style={styles.containor}>
                    {/* <View style={styles.logInSignUpTextParentView}>
                        <View style={styles.logInSignUpTextChildView}>
                            <TouchableNativeFeedback onPress={() => { navigateTo('login') }} >
                                <View>
                                    <Text style={[styles.logInSignUpText]}>
                                        Log in
                                    </Text>
                                </View>
                            </TouchableNativeFeedback>

                            <View style={[styles.logInSignUpTextChildView,
                            styles.signUpLoginViewBorder, { backgroundColor: 'white' }]}></View>
                        </View>

                        <View style={styles.logInSignUpTextChildView}>
                            <View>
                                <Text style={styles.logInSignUpText}>
                                    Sign up
                                </Text>
                            </View>
                            <View style={[styles.logInSignUpTextChildView,
                            styles.signUpLoginViewBorder]}></View>
                        </View>
                    </View> */}

                    <View style={styles.inputFieldMainView}>
                        <View style={[styles.inputAndIconFieldBorderColorView,
                        { borderColor: isFullNameFocused ? Color.activeBorderColor : Color.inActiveBorderColor, marginTop: 10 }]}>
                            <Image source={emailIcon} style={styles.inputFieldIcon} />
                            <TextInput

                                onFocus={() => handleFocus('fullname')}
                                onBlur={() => handleBlur('fullname')}
                                style={[styles.textInputField,
                                ]} placeholder={'Full Name'}
                                placeholderTextColor={placeholderColor}
                                allowFontScaling={true}
                            />

                        </View>

                        <View style={[styles.inputAndIconFieldBorderColorView,
                        { borderColor: isEmailFocused ? Color.activeBorderColor : Color.inActiveBorderColor, marginTop: 20 }]}>
                            <Image source={emailIcon} style={styles.inputFieldIcon} />
                            <TextInput

                                onFocus={() => handleFocus('email')}
                                onBlur={() => handleBlur('email')}
                                style={[styles.textInputField,]} placeholder={'E-mail'}
                                placeholderTextColor={placeholderColor} />
                        </View>



                        <View style={[styles.inputAndIconFieldBorderColorView,
                        { borderColor: isPasswordFocused ? Color.activeBorderColor : Color.inActiveBorderColor, marginTop: 25 }]}>
                            <View style={[styles.inputAndIconFieldBorderColorView, { flex: 1, borderBottomWidth: 0 }]}>
                                <Image source={passwordIcon} style={styles.inputFieldIcon} />
                                <TextInput
                                    onFocus={() => handleFocus('password')}
                                    onBlur={() => handleBlur('password')}
                                    secureTextEntry={isPasswordShow}
                                    style={styles.textInputField} placeholder={'Password'}
                                    placeholderTextColor={placeholderColor} />
                            </View>
                            <View style={[styles.inputAndIconFieldBorderColorView, { flex: 1, justifyContent: 'flex-end', borderBottomWidth: 0 }]}>
                                <TouchableOpacity onPress={() => { PasswordHideAndShow() }}>

                                    <Image source={emailIcon} style={[styles.inputFieldIcon]} />
                                </TouchableOpacity>

                            </View>

                        </View>

                        <View style={[styles.inputAndIconFieldBorderColorView,
                        { borderColor: isPasswordFocused ? Color.activeBorderColor : Color.inActiveBorderColor, marginTop: 25 }]}>
                            <View style={[styles.inputAndIconFieldBorderColorView, { flex: 1, borderBottomWidth: 0 }]}>
                                <Image source={emailIcon} style={styles.inputFieldIcon} />
                                <TextInput
                                    onFocus={() => handleFocus('password')}
                                    onBlur={() => handleBlur('password')}
                                    secureTextEntry={isPasswordShow}
                                    style={styles.textInputField} placeholder={'Confirm-Password'}
                                    placeholderTextColor={placeholderColor} />
                            </View>
                            <View style={[styles.inputAndIconFieldBorderColorView, { flex: 1, justifyContent: 'flex-end', borderBottomWidth: 0 }]}>
                                <TouchableOpacity onPress={() => { PasswordHideAndShow() }}>

                                    <Image source={emailIcon} style={[styles.inputFieldIcon]} />
                                </TouchableOpacity>

                            </View>

                        </View>


                    </View>
                    <CustomeButton title={'Submit'} onPress={() => submit()} />
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                        <Text style={{ fontSize: 14, color: 'gray', }}>
                            Already Have an Account   </Text>
                        <TouchableOpacity onPress={() => { navigateTo('Login') }}>
                            <Text style={{ color: Color.activeBorderColor, fontSize: 16, fontWeight: 'bold' }}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    header: {
        height: 150,
        // backgroundColor: 'tomato',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
        // width:'100%'
    },
    headerImage: {
        height: 150,
        width: '90%',
        backgroundColor: null
    },
    containor: {
        flex: 1,
        // backgroundColor:'yellow',
        // marginTop: 50,
        alignItems: 'center'
    },
    logInSignUpTextParentView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        width: '70%',
        // backgroundColor:'red'

    },
    logInSignUpTextChildView: {
        width: '48%', height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        flexDirection: 'column',
        //backgroundColor: 'yellow',
        // borderBottomWidth: 1
    },
    signUpLoginViewBorder: {
        width: '100%',
        marginLeft: 1,
        height: 5.4,
        backgroundColor: Color.activeBorderColor,
        marginTop: 8
    },
    logInSignUpText: {
        fontSize: 18,
        // fontVariant:'',
        fontWeight: 'bold',
    },
    loginInputBox: {
        height: 40,
        width: 200

    },
    inputFieldMainView: {
        width: '85%',
        // marginTop: 20,
        // backgroundColor:'red',
        justifyContent: 'center',
        alignItems: 'center',
        height: 300,


    },
    inputAndIconFieldBorderColorView: {
        height: 44,
        width: '100%',
        // backgroundColor:'yellow',
        // justifyContent:'center',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderColor: Color.inActiveBorderColor
    },
    textInputField: {
        width: '100%',
        // borderWidth:1,
        height: 44,
        marginLeft: 10,
        fontSize: 14,
        color: 'black'
        // fontWeight: '800'

    },
    inputFieldIcon: {
        height: 20,
        width: 20
    },
    signUpButtonView: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        backgroundColor: '#22d1aa'
        , width: '75%', borderRadius: 35
    },
    signUpButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',


    }
})