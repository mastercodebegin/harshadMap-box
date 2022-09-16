import React from 'react'

import Login from '../screen/login/Login';
import SignUp from '../screen/signup/SignUp';
import Dashboard from '../screen/dashboard/Dashboard'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const screensData=[
    {name:'Home',component:Dashboard},
    {name:'Login',component:Login},
    {name:'Signup',component:SignUp}
]
export default BottomTabsNavigator = () => {
    const BottomTabs = createBottomTabNavigator()

    return (
        <BottomTabs.Navigator screenOptions={{ headerShown: false }}>
            {/* <BottomTabs.Screen name="Home" component={Dashboard} />
            <BottomTabs.Screen name="Login" component={Login} />
            <BottomTabs.Screen name="Signup" component={SignUp} /> */}
           { screensData.map((item,key)=>
               <BottomTabs.Screen key={key} name={item.name} component={item.component}/>
           )}
        </BottomTabs.Navigator>
    );

}



