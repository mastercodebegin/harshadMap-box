import React, { Component, useState } from 'react'
import {
    View, TextInput, StatusBar, TouchableOpacity,
    Text, StyleSheet, FlatList, ScrollView,
    Image,
    TouchableHighlight,
    TouchableNativeFeedback,
    // ActivityIndicator

} from 'react-native'
// import { ActivityIndicator } from 'react-native-paper'
import { Formik } from 'formik';
import * as Yup from 'yup';
import headerImage from '../../assets/shop2.png'
import inputFieldIconPath from '../../assets/headerImage.png'
import emailIcon from '../../assets/user.png'
import passwordIcon from '../../assets/password.png'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native'
import { getMyProfileInitiate, loginInitiate } from '../../context/actions/Actions'
import Color from '../../assets/colors/Color';
import { styles } from './LoginStyle'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { ActivityIndicator } from 'react-native-paper'
import SpinnerHelper from '../../helper/SpinnerHelper'
import AsyncStorage from '@react-native-async-storage/async-storage'
import CustomeButton from '../../helper/util/CustomeButton'
import InputField from '../../helper/util/InputField';
// import Spinner from 'react-native-loading-spinner-overlay';




export default Login = ({ navigation }) => {
    // let isFocused=true;
    const [isSubmitted, setIsSubmitted] = React.useState(false)
    const [isEmailFocused, setIsEmailFocused] = React.useState(false)
    const [isPasswordFocused, setIsPasswordFocused] = React.useState(false)
    const placeholderColor = 'black'
    const [email, setEmail] = React.useState('fama52@yopmail.com')
    const [password, setPassword] = React.useState('Fama@123')
    const [isLoading, setIsLoading] = useState(false)

    const response = useSelector(state => state.LoginReducer)
    const dispatch = useDispatch()
    const profileDispatch = useDispatch()



    const data = { 'email': email, 'password': password }
    // console.log('type of-------',typeof data);
    stopLoader = () => {
        setIsLoading(false)

    }

    useEffect(() => {
        if (isSubmitted == true) {

            setIsLoading(true)

            if (response.data) {
                if (response.data.status == 200) {
                    navigateTo('dashboard')
                    dispatch(getMyProfileInitiate())

                }
                else {
                    console.log('Error', response)
                    alert(response.data.message)

                }
            }
        }
    })

    const handleFocus = (value) => {
        if (value == 'email') { setIsEmailFocused(true) }
        else if (value == 'password') { setIsPasswordFocused(true) }
        else { console.warn('didnt get value') }

    }
    const handleBlurHandler = (value) => {
        if (value == 'email') { setIsEmailFocused(false) }
        else if (value == 'password') { setIsPasswordFocused(false) }
        else { console.warn('didnt get value') }
    }
    const submit = (values) => {
        console.log(values)
        console.log('values')
        // setIsSubmitted(true)
        // setIsLoading(true)
        // dispatch(loginInitiate(data))

    }
    const navigateTo = (route) => {
        navigation.navigate(route)

    }
    const LoginSchema = Yup.object({
        email: Yup.string().required('Required').email('Invalid email'),
        password: Yup.string().required('Required')
    })

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={LoginSchema}
            onSubmit={(values) => { submit(values) }}
        >
            {(props) => (
                <View style={styles.mainView}>

                    <StatusBar backgroundColor={'white'} />
                    <View style={styles.header}>
                        <Image source={headerImage} style={styles.headerImage}
                            resizeMode={'center'} />
                    </View>
                    <ScrollView>
                        <View style={[styles.containor]}>

                            <View style={[styles.inputFieldMainView,]}>
                                 {/* <View style={[styles.inputAndIconFieldBorderColorView,
                                { borderColor: isEmailFocused ? Color.activeBorderColor : Color.inActiveBorderColor, }]}>
                                    <Image source={emailIcon} style={styles.inputFieldIcon} />
                                    <TextInput
                                        // onFocus={() => handleFocus('email')}
                                        onBlur={props.handleBlur('email')}
                                        style={[styles.textInputField,]} placeholder={'Email'}
                                        placeholderTextColor={placeholderColor}
                                        onChangeText={props.handleChange('email')}
                                    />
                                </View>  */}
                                <InputField props={props} placeholder={'Email'} />
                                <View style={{ width: '100%', justifyContent: 'flex-start', height: 20, }}>
                                    <Text style={{ color: 'red', fontSize: 14 }}>{props.touched.email && props.errors.email}</Text>
                                </View>

                                <View style={[styles.inputAndIconFieldBorderColorView,
                                {
                                    borderColor: isPasswordFocused ? Color.activeBorderColor : Color.inActiveBorderColor,
                                    marginTop: 6,
                                }]}>
                                    <View style={[styles.inputAndIconFieldBorderColorView, { flex: 1, borderBottomWidth: 0 }]}>
                                        <Image source={passwordIcon} style={styles.inputFieldIcon} />
                                        <TextInput
                                            onFocus={() => handleFocus('password')}
                                            onBlur={() => handleBlurHandler('password')}
                                            style={styles.textInputField} placeholder={'Password'}
                                            placeholderTextColor={placeholderColor}
                                            onChangeText={props.handleChange('password')}
                                        />
                                    </View>
                                    <View style={[styles.inputAndIconFieldBorderColorView, { flex: 1, justifyContent: 'flex-end', borderBottomWidth: 0 }]}>
                                        <Image source={emailIcon} style={[styles.inputFieldIcon]} />
                                    </View>

                                </View>
                                <View style={{ height: 20, justifyContent: 'flex-start', width: '100%' }}>
                                    <Text style={{ color: 'red' }}>{props.touched.password && props.errors.password}</Text>
                                </View>


                            </View>
                            <CustomeButton title={'Login'} onPress={() => props.handleSubmit()} />
                            <View style={styles.forgotPasswordView}>
                                <Text style={styles.forgotPasswordText}>Don't Have an Account?    </Text>
                                <TouchableNativeFeedback onPress={() => { navigateTo('SignUp') }}>
                                    <Text style={styles.clickHereLink}>Create Account</Text>
                                </TouchableNativeFeedback>

                            </View>


                        </View>
                    </ScrollView>

                    <SpinnerHelper isLoad={response.isLoading ? true : false} />
                </View>
            )}</Formik>

    )
}

