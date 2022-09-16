import React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import Login from '../screen/login/Login';
import SignUp from '../screen/signup/SignUp';

export default  TopTabsNavigator = () => {
  const TopTab = createMaterialTopTabNavigator()

    return (
      <TopTab.Navigator>
        <TopTab.Screen name="login" component={Login} />
        <TopTab.Screen name="signup" component={SignUp} />
      </TopTab.Navigator>
    );
  }
  