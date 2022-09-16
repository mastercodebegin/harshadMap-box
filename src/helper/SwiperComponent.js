//@ts-nocheck
import React, { useEffect, useRef, useState } from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import { Modalize } from 'react-native-modalize';

import Swiper from 'react-native-swiper'


export default SwiperComponent =()=> {
  // const modalizeRef = useRef<Modalize>(null);

const [page,setPage] = useState(0)
 const refs = useRef()

const changePage=()=>{
  setPage(page=>page+1)
   console.log('Pagecount',page)
}
useEffect(()=>{
  // console.log('Pagecountuse',refs)

},[refs])
  
    return (
      <View style={{flex:1}}>
      <Swiper style={styles.wrapper} showsButtons={true}
      // ref='swiper'
      ref={refs}
       >
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
      <Button onPress={()=>{refs.current.scrollBy(1)
      console.log(refs.current)
      }}>Next</Button>
      </View>
    )
  
}

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})
