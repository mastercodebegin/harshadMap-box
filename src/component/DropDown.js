import React,{useState} from 'react'
import {View,Text,Image} from 'react-native'
import ModalDropdown from 'react-native-modal-dropdown';
import Icon from '../assets/images/logo__1_.png'



const ImageIcon=()=>{
  return(<Image source={Icon} style={{height:10,width:10}}/>)
}

export const Modal=()=>{
  return(
  <ModalDropdown options={['option 1', 'option 2']}
  renderRightComponent={ImageIcon}	
  defaultValue='Gender  '
  textStyle={{fontSize:20,color:'red'}}

  />
  )
}
export default DropDown=()=> {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Modal/>
    </View>
  );
}
