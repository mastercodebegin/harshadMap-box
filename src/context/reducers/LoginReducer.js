import ActionsTypes from "../actions/ActionsTypes";
const initialState=[];

export default LoginReducer=(state=initialState,action)=>{
    console.log('LoginReducer',action.type)
    switch(action.type)
    {
         case ActionsTypes.LOGIN_INITIATE: return {isLoading:true}
         case ActionsTypes.LOGIN_SUCCESS:return{...state,status:action.status,isLoading:false,data:action.payload}
         case ActionsTypes.LOGIN_FAIL:return{...state,isLoading:false,data:action.payload}
        
         default : return state

    }

}
