
import React from 'react'
import Axios from 'axios'
import UrlConstants from './UrlConstants'
import { Header } from './Header'
import AsyncStorage from '@react-native-async-storage/async-storage'
import  {useNavigation} from '@react-navigation/native'


export const getRequestMethod = async (requestUrl) => {
     console.log('Service url', UrlConstants.BASE_URL + requestUrl)
    //  const navigate=useNavigation()
    key = await AsyncStorage.getItem('jwtToken')
    // console.log(key)
    // if(true)
    // {navigate.navigate('login')}
    const response = await Axios({
        method: 'get',
        url: UrlConstants.BASE_URL+ requestUrl,
        headers:{ ...Header(),'jwtToken':JSON.parse(key)}
            // 'jwtToken':UrlConstants.TOKEN
        
    })
    .catch(error=>error.response.status!==200?error.message:null);
     // console.log(response.data.responseDetails.user)
    // console.log('status code',response.status)
    return response
}

export const postRequestMethod = async () => {

}

export const putRequestMethod = async (requestData, requestUrl) => {
    const  response = await Axios({
        method:'put',
        data:requestData,
        url:UrlConstants.BASE_URL+requestUrl,
        headers:{Header}
        
    }).catch(error=>error.response.status!==200?error.response.data:null);
    // if(response.headers)
    // {
    //     console.log('after success',response.headers.sessionid)
    //     return response

    // }

    
    
    return response
    


}