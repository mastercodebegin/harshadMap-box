import React, { useCallback, useEffect, useReducer, useState } from 'react'
import { Tab, TabView, Button } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Image, Dimensions, Text, StyleSheet, StatusBar, SafeAreaView, Platform, FlatList, ScrollView, ImageBackground, TouchableNativeFeedback } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { Searchbar, Avatar, Modal } from 'react-native-paper';
import RefurBishedIcon from '../../assets/images/refurbished.png'
import NewIcon from '../../assets/images/refurbished.png'
import { GET_MY_PROFILE_INITIATE } from '../../redux/actions/ActionsTypes';
import { getMyProfileInitiate, getMyProfileSuccess } from '../../redux/actions/Actions'
import SpinnerHelper from '../../helper/SpinnerHelper';


import searchIcon from '../../assets/ic_search.png'
export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const SLIDER_WIDTH2 = Dimensions.get('window').width
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH)
export const ITEM_HIGHT = Math.round(SLIDER_WIDTH)
import Swiper from 'react-native-swiper'
import Color from '../../assets/colors/Color';


// import {
//   launchCamera,
//   launchImageLibrary
// } from 'react-native-image-picker';

export default Dashboard = () => {
  const [data, setData] = useState({})
  const dispatch = useDispatch()
  const [searchQuery, setSearchQuery] = React.useState('');
  const [itempreview, setItemPreview] = React.useState('{}')
  const [visible, setVisible] = React.useState(false);
  const [datas, setDatas] = useState([
    { link: require('../../assets/images/banner.jpeg'), name: 'A' },
    { link: require('../../assets/images/banner2.jpeg'), name: 'B' },
     { link: require('../../assets/images/banner2.jpeg'), name: 'C' },

  ])
  const [product, setProduct] = useState([
    { id: 1, link: require('../../assets/images/banner.jpeg'), price: '19999', ram: '2GB', rom: '16GB', procesor: '2.7GHZ', currencyIcon: require('../../assets/images/rupee.png'), badge: 'old' },
    { id: 2, link: require('../../assets/images/banner2.jpeg'), price: '15555', ram: '4GB', rom: '8GB', procesor: '2.6GHZ', currencyIcon: require('../../assets/images/rupee.png'), badge: 'new' },
     { id: 3, link: require('../../assets/images/banner2.jpeg'), price: '10000', ram: '2GB', rom: '8GB', procesor: '2.5GHZ', currencyIcon: require('../../assets/images/rupee.png'), badge: 'old' },
     { id: 4, link: require('../../assets/images/banner2.jpeg'), price: '19999', ram: '2GB', rom: '16GB', procesor: '2.7GHZ', currencyIcon: require('../../assets/images/rupee.png'), badge: 'old' },
    // { id: 5, link: require('./assets/images/iphone.jpeg'), price: '15555', ram: '4GB', rom: '8GB', procesor: '2.6GHZ', currencyIcon: require('./assets/images/rupee.png'), badge: 'new' },
    // { id: 6, link: require('./assets/images/iphone.jpeg'), price: '10000', ram: '2GB', rom: '8GB', procesor: '2.5GHZ', currencyIcon: require('./assets/images/rupee.png'), badge: 'old' },
  ])


  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);


  const onChangeSearch = query => setSearchQuery(query);

  const response = useSelector(state => state.ProfileReducer)
  // let name =''



  useEffect(() => {
    //submit()
    if (response) {
      console.log('dashboard----------', response.data)
      if (response.data) {
        console.log('dashboard----------', response.data.firstname)
        setData(response.data)


      }
      //  
    }
  }, [response])






  const render_Item = (item, index) => {
    // console.log(index)

  }
  const showProductDetails = item => {
    setItemPreview(item)
    setVisible(true)

  }
  const navigateTo = (screenName) => {
    // const items=item
    console.log(screenName)
    // navigation.navigate(screen,{items:item})
    navigation.navigate(screenName)
  }
  return (

    <View style={styles.main}>
      <LinearGradient
        colors={[Color.activeBorderColor, 'white']}
        // colors={['purple', 'white']}
        style={{ flex: 1 }}
        //  locations={[0.2,0.5,0.3]}
        start={{ x: .1, y: 0 }} end={{ x: .1, y: .5 }}
      >
        <View style={styles.Header}>
          <View style={{ flex: .3, backgroundColor: null, justifyContent: 'flex-end', alignItems: 'center' }}>
            <Searchbar
              placeholder="Search"
              onChangeText={onChangeSearch}
              value={searchQuery}
              icon={searchIcon}
              style={{ width: '90%' }}
            />
          </View>

          <View style={styles.ProductSwiperParent}>
            <View style={styles.ProductSwiperChild}>
              <Swiper
                autoplay={true}
                autoplayTimeout={3}
                //  dotStyle={{justifyContent:'flex-end',alignItems:'center',marginTop:10}}
                bounces={false}
                autoplayDirection={false}
                removeClippedSubviews={false}
                paginationStyle={{ justifyContent: 'center', alignItems: 'flex-start', }}

              >
                {datas.map((item, index) =>
                  <TouchableNativeFeedback key={index} onPress={() => { navigateTo('Product') }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ImageBackground key={index} source={item.link} style={{ height: '100%', width: '100%' }}
                    >
                      {/* <Text>Hi123</Text> */}
                    </ImageBackground>
                  </TouchableNativeFeedback>

                )}

              </Swiper>
              {/* </TouchableOpacity> */}
            </View>
          </View>
          <View>

          </View>
        </View>
        <View style={{
          flex: .6, backgroundColor: null, marginTop: 1,
          borderColor: '#ccc', alignItems: 'center', elevation: 2
        }}>

          <FlatList
            data={product}
            // key={'-'}
            numColumns={2}
            keyExtractor={(item, index) => index}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) =>
              <TouchableNativeFeedback onPress={() => { () => { navigateTo(item, 'ProductView') } }}>
                <View style={{
                  width: 140, height: 130, elevation: 4,
                  backgroundColor: 'white', margin: 16, borderRadius: 8, flexDirection: 'column',
                  marginBottom: 0

                }}>
                  <View style={{ flex: .6, backgroundColor: null, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flex: 1, backgroundColor: null, justifyContent: 'center', alignItems: 'flex-end' }}>
                      <Image source={item.link} style={{ height: 65, width: 65, backgroundColor: null }} resizeMode={'cover'} />

                    </View>
                    <View style={{ flex: .3, backgroundColor: null }}>
                      {item.badge == 'old' ? <Image source={RefurBishedIcon} style={styles.badgeIcon} /> :
                        <Image source={NewIcon} style={styles.badgeIcon} />}
                    </View>

                  </View>
                  <View style={{ flex: .4, backgroundColor: null, flexDirection: 'row', justifyContent: 'flex-start', borderTopWidth: .1 }}>

                    <View style={{ flexDirection: 'column', backgroundColor: null, flex: 1, }}>
                      <View style={{ flex: 1, backgroundColor: null, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                        <Image source={item.currencyIcon} style={{ height: 16, width: 16, margin: 2 }} />
                        {/* <Avatar.Image source={} size={20}/> */}
                        <Text>{`${item.price}`}</Text>
                      </View>



                    </View>
                    <View style={{ flexDirection: 'column', flex: 1, }}>
                      <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                        <Text>{`Ram ${item.ram}`}</Text>
                      </View>

                      <View style={{ flexDirection: 'row', backgroundColor: null, flex: 2, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                        <Text>{`Rom ${item.rom}`}</Text>
                      </View>
                    </View>
                  </View>
                </View>

              </TouchableNativeFeedback>
            } />
        </View>
      </LinearGradient>
      {/* <Modal visible={visible}  contentContainerStyle={styles.containerStyle}>
          {
            <ProductView data={itempreview} />
          }
        </Modal> */}
    </View>


  )
}
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: null
  },
  Header: {
    flex: .4,
    // backgroundColor: 'red',
    justifyContent: 'space-between',
    elevation: 1
  },
  ProductSwiperParent: {
    flex: .6,
    borderColor: '#1ccea4',
    backgroundColor: null
  },
  ProductSwiperChild: {
    flex: 1, justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: null
  },
  badgeIcon: {
    height: 24,
    width: 24,
    margin: 4
  },
  containerStyle:
    { backgroundColor: 'white', flex: 1 }
})