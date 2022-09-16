
    import ActionsTypes from "./ActionsTypes"

    export const loginInitiate = (requestData) => {
        console.log('login initiate action',requestData)
        return{
            type: ActionsTypes.LOGIN_INITIATE,
            payload: requestData
        }
    }

    export const loginSuccess = (response) => {
        // console.log('displayed in action function',response)
        
            return {
                type: ActionsTypes.LOGIN_SUCCESS,
                payload: response,
                status:response.status
                
            }

       
    }
    export const loginFail = (action) => {
        return {
            type: ActionsTypes.LOGIN_FAIL,
            payload: action
        }
    }
        export const getMyProfileInitiate = () => {
            console.log('getmyprofile initiate action------')
            return {
                type: ActionsTypes.GET_MY_PROFILE_INITIATE,
                
            }
    
    }

    export const getMyProfileSuccess = (action) => {
        return {
            type: ActionsTypes.GET_MY_PROFILE_SUCCESS,
            payload: action
        }

}
export const getMyProfileFail = (action) => {
    return {
        type: ActionsTypes.GET_MY_PROFILE_FAIL,
        payload: action
    }
}



