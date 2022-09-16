import React from "react"
import { ActivityIndicator } from 'react-native-paper'
import Spinner from 'react-native-loading-spinner-overlay';
import Color from "../assets/colors/Color";

const SpinnerHelper = ({ isLoad }) => {
    return (
       
            <Spinner
                visible={isLoad}
                customIndicator={<ActivityIndicator size='large' color={Color.activeBorderColor} />}
                overlayColor={null}
            //   textContent={'Loading...'}
            //   textStyle={color='#FFF'}
            />
        
    )

}
export default SpinnerHelper