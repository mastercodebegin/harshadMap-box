import ActionsTypes from "../actions/ActionsTypes";
const initialState=[];

export default ProfileReducer=(state=initialState,action)=>{
    console.log('ProfileReducer',action.type)
    switch(action.type)
    {
         case ActionsTypes.GET_MY_PROFILE_INITIATE: return {...state,isLoading:true}
         case ActionsTypes.GET_MY_PROFILE_SUCCESS:return{...state,status:action.status,isLoading:false,data:action.payload}
         case ActionsTypes.GET_MY_PROFILE_FAIL:return{...state,isLoading:false,data:action.payload}
        
         default : return state

    }

}
