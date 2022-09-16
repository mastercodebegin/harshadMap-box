import React from "react"
import { all } from "@redux-saga/core/effects"
import LoginSaga from "./LoginSaga"
import ProfileSaga from "./ProfileSaga"


 export default function* RootSaga(){
    yield all([
        LoginSaga(),
        ProfileSaga()
      ])
}