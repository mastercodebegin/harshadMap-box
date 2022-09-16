import {combineReducers} from 'redux'
import LoginReducer from './LoginReducer'
 import ProfileReducer from './ProfileReducer'

const RootReducer= combineReducers({
    LoginReducer,
    ProfileReducer
})
export default RootReducer


