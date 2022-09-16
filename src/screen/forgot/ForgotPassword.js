import React from 'react'
import { FlatList } from 'react-native';
import { Text, View, Image,StyleSheet } from 'react-native'
import { useSelector } from 'react-redux';
import { Avatar,Card } from 'react-native-elements';

export default ForgotPassword = () => {
    // const [user, setData]=React.useState()
    const response = useSelector(state => state.LoginReducer);

    let userData = []
    let email
    let imagePath
    // let userData
    // let user=''
    //useEffe
    //const data=response.user
    //setData(response.user)
    //const data=JSON.parse(response.user.data)
    // console.log(response.user)
    if (response.user) {
        console.log(response.user.data)
        userData = response.user.data
        imagePath = response.user.data[0].avatar

        // data 
        // if(data)
        // {
        //userData=data
        // userData=response.user.data
        // console.log('userdata----',userData)
        // email=userData[0].email
        // }
    }

    return (
        <View>

            <Text>Forgot password ? { }</Text>
            <FlatList
                data={userData}
                keyExtractor={(item, index) => index + 1}
                
                renderItem={({ item }) =>
                    // <View style={styles.card}>
                    <Card containerStyle={{borderWidth:1,
                    height:150,
                    borderColor:'green', justifyContent:'center',alignItems:'center'}}>
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Text>
                            {item.email}
                        </Text>
                        <Avatar Standard
                        // size="large"
                              style={{ height: 90,width:90 }}
                            source={{ uri: item.avatar }}
                        />

                        {/* </View> */}
                    </View>
                    </Card>
                    }

            />
            {/* <Image style={{height:30,width:30}} source={user.avatar} /> */}
        </View>
    )
}

const styles=StyleSheet.create({
    card:{
        height:150,
        width:150,
        backgroundColor:'green',
        flexDirection:'row'
    }

})















// const [datas, setData]=React.useState([])
// const response = useSelector(state=>state.LoginReducer);
// let user=''
// //useEffe
// //const data=response.user
// //setData(response.user)
// //const data=JSON.parse(response.user.data)
// console.log(response.user)
// if(response.user){
// user=response.user['data'][0];
// if(user){
// console.log(user)
// }
//}

