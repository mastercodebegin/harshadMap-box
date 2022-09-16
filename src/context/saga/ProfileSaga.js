import React from 'react'
import { takeEvery, call, put, } from 'redux-saga/effects'
import Axios from 'axios'
import ActionTypes from '../actions/ActionsTypes'
// import {loginSuccess,loginFail} from '../actions/Actions'
 import { getRequestMethod,putRequestMethod } from '../service/CommonService'
import UrlConstants from '../service/UrlConstants'
import { getMyProfileInitiate,getMyProfileFail,getMyProfileSuccess } from '../actions/Actions'
function* getMyProfile(){
    // console.log('profile saga')
    Apiresponse = yield call(getRequestMethod,UrlConstants.GET_PROFILE)
     console.log('Profile saga response',Apiresponse.data.responseDetails.user.businessId)
   
    if (Apiresponse.status==200)
    {
        console.log('profile success call')
        yield put(getMyProfileSuccess(Apiresponse.data.responseDetails.user))

    }
       else{
        yield put(getMyProfileFail(Apiresponse))
       }
       
       
   // yield put(getMyProfileInitiate)
    //yield call(getRequestMethod)

}


export default function* ProfileSaga() {
    yield takeEvery(ActionTypes.GET_MY_PROFILE_INITIATE,getMyProfile)


}













