import React from 'react'
import { takeEvery, call, put } from 'redux-saga/effects'
import Axios from 'axios'
import ActionTypes from '../actions/ActionsTypes'
// import {loginSuccess,loginFail} from '../actions/Actions'
import { getRequestMethod, putRequestMethod } from '../service/CommonService'
import UrlConstants from '../service/UrlConstants'
import { loginSuccess, loginFail } from '../actions/Actions'
import AsyncStorage from '@react-native-async-storage/async-storage';



function* loginInitiate(action, navigation) {
     console.log('log in saga',action)
    let Apiresponse = ''
    Apiresponse = yield call(putRequestMethod, action.payload, UrlConstants.LOGIN)


    if (Apiresponse) {

        if (Apiresponse.status == 200) {
           yield AsyncStorage.setItem('jwtToken',JSON.stringify(Apiresponse.headers.sessionid))
           console.log('LoginApi',Apiresponse.status)
           yield put(loginSuccess(Apiresponse))
        }
        else {
            yield put(loginFail(Apiresponse))
            console.log('failed reducer called saga')

        }
    }
}

// function* getMyProfile(action,navigation) {
//      console.log('getmyprofile in saga',action)
//      let Apiresponse = ''
//      Apiresponse=yield call (getRequestMethod,action.payload,UrlConstants.LOGIN)
//     //  console.log('saga data', Apiresponse)

//     if(Apiresponse!=null)
//     {


//      if(Apiresponse.status==200)
//      {
//     yield put(loginSuccess(Apiresponse))
//     console.log('success reducer called saga')

//     }
//      else{
//          yield put(loginFail(Apiresponse))
//          console.log('failed reducer called saga')

//     }

//     }
// }


export default function* LoginSaga() {
    yield takeEvery(ActionTypes.LOGIN_INITIATE, loginInitiate)
    // yield takeEvery(ActionTypes.GET_MY_PROFILE_INITIATE,getMyProfile)


}













