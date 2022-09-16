import React, { useCallback, useEffect, useReducer, useState } from 'react'
import { View, Text, Image, StyleSheet, Dimensions, StatusBar, ActivityIndicator } from 'react-native'
import { Tab, TabView, Button } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  launchCamera,
  launchImageLibrary
} from 'react-native-image-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GET_MY_PROFILE_INITIATE } from '../../redux/actions/ActionsTypes';
import { getMyProfileInitiate, getMyProfileSuccess } from '../../redux/actions/Actions'
import SpinnerHelper from '../../helper/SpinnerHelper';

export default Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useDispatch()
  const response = useSelector(state => state.ProfileReducer)




  useEffect(() => {
    //submit()
    if (response) {
      console.log('dashboard----------', response)

    }
  }, [response])

  const [index, setIndex] = React.useState()
  let deviceWidth = Dimensions.get('window').width
  let deviceHeight = Dimensions.get('window').height


  // submit=()=>{
  //    dispatch(getMyProfileSuccess())

  // }

  const captureImageByCamera = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',

      },
      selectionLimit: 5
    }
    launchCamera(options, (response) => {
      console.log(response)
      console.log()
    })
  }


  const showGallery = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',

      },
      selectionLimit: 5
    };
    launchImageLibrary(options, (response) => {
      console.log(response)
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }

      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response);
        // alert(response);
      }
      else {
        console.log('user cancelled', response.assets.length)
      }
    })
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.main}>
        <StatusBar backgroundColor='red' />

        <View style={{ backgroundColor: 'gray', flexDirection: 'row' }}>
          <View style={[styles.headerLeft, { flex: 1 }]}>

          </View>
          <View style={[styles.headerRight, { flex: 1 }]}>

          </View>
        </View>{/* header */}

        <View>
          {/* <Button title={"ShowGallery"} onPress={() => { showGallery() }} /> */}
          <Text>{response ? response.data.firstname : null}</Text>
          {/* <Button title={"CaptureImage"} onPress={() => { captureImageByCamera() }} /> */}
          <Button title='API' onPress={() => { submit() }} />

        </View>
        <View>
          <SpinnerHelper isLoad={response.isLoading ? true : false} />

        </View>
      </View>
    </SafeAreaView>

  )
}


const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    margin: 0,
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {

  },
  headerLeft: {
    backgroundColor: 'purple'
  },
  headerRight: {
    backgroundColor: 'yellow'

  }
})