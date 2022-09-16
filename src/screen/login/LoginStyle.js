import React from 'react'
import {StyleSheet} from 'react-native'
import Color from '../../assets/colors/Color';
import {heightFromPercentage,scaledSize,widthFromPercentage} from '../../helper/util/Utilities'


export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    header: {
        height: 150,
        // backgroundColor: 'tomato',
        marginTop: 50,
        justifyContent:'center',
        alignItems:'center'
    },
    headerImage: {
        height: 150,
        width: '90%'
    },
    containor: {
        flex: 1,
        // backgroundColor:'yellow',
        // marginTop: 50,
        alignItems: 'center'
    },
    logInSignUpTextParentView: {
        // flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        // height: 10,
        // width: '70%',
        // backgroundColor:'black'

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
        height: 200,
        

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
        fontWeight: '800',
        color:'black',
        // backgroundColor:'red'
        
    },
    inputFieldIcon: {
        height: 20,
        width: 20
    },
    forgotPasswordView:{
        marginTop:20,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    forgotPasswordText:{
        fontSize:14,
        fontWeight:"400",
        color:'black'
    },
    clickHereLink:{
        fontSize:14,
        fontWeight:'bold',
        color:Color.activeBorderColor
    },
    submitButtonView:{
        height: 40,
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 20,
        backgroundColor: '#22d1aa',
         width: '50%', borderRadius: 8

    },
    logo:{
        height: heightFromPercentage(10),
         width: widthFromPercentage(10)
      }
    
})