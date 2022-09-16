import React from 'react'

export default function DrawerNavigator() {
    const Drawer = createDrawerNavigator()

    return (
        <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Dashboard} />
        <Drawer.Screen name="login" component={Login} />
        <Drawer.Screen name="signup" component={SignUp} />
    </Drawer.Navigator>
    )
}
