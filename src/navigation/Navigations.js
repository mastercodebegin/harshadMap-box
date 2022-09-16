import React from 'react'
import { Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'


import Login from '../screen/login/Login';
import SignUp from '../screen/signup/SignUp';
import Dashboard from '../screen/dashboard/Dashboard'
import headerImage from '../assets/headerImage.png'
import { BackgroundColor } from 'jest-matcher-utils/node_modules/chalk';
import ForgotPassword from '../screen/forgot/ForgotPassword';
import BottomTabNavigator from './BottomTabNavigator';
import StackNavigator from './StackNavigator';



 
export default Navigation = () => {

  return (
    <NavigationContainer>
      <StackNavigator/>  
      {/* test git        */}
    </NavigationContainer>
  )
}

