import React,{ useState } from 'react';
import { View ,Image} from 'react-native'
import { Button } from 'react-native-paper';
import StepIndicator from 'react-native-step-indicator';
import Icon from '../../assets/user.png'

const labels = ["Cart","Delivery Address","Order Summary","Payment Method","Track"];
const color = '#b8daa6'
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize:30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 2,
  stepStrokeCurrentColor: color,
  stepStrokeWidth: 2,
  stepStrokeFinishedColor: color,
  stepStrokeUnFinishedColor: color,
  separatorFinishedColor: color,
  separatorUnFinishedColor: color,
  stepIndicatorFinishedColor: color,
  
}


export default Stepper=()=> {

    const[currentPosition,setCurrentPosition] =useState(0)

    const onPageChange=()=>{
        console.log('clicked ');
        setCurrentPosition(currentPosition=>currentPosition+1)
        // this.setState({currentPosition: position});
    }
    const startFromBegining=()=>{
        console.log('clicked ');
        setCurrentPosition(0)
        // this.setState({currentPosition: position});
    }
const StepperIcon=()=>{
  return(
    <View style={{backgroundColor:null,width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}}>

      <Image source={Icon} style={{height:12,width:12,alignSelf:'center'}}/>
    </View>

    
  )
}

  return (
      <View>
          <View style={{marginTop:10}}>
    <StepIndicator
         customStyles={customStyles}
         currentPosition={currentPosition}
         renderStepIndicator={()=>(<StepperIcon/>)}
         
        //  labels={labels}
    />
    </View>
    <View style={{marginTop:30}}>
    <Button onPress={()=>{onPageChange()}}>Next</Button>
    <Button onPress={()=>{startFromBegining()}}>startFromBegining</Button>
    </View>
    </View>
  )


//...
}