import React, { createRef, useEffect, useState, useRef } from 'react'
import { View, Text, FlatList, Image, ScrollView, Dimensions, TouchableOpacity, TouchableNativeFeedback } from 'react-native'
import { FlatListSlider } from 'react-native-flatlist-slider';
// import Images from './Images';
import LeftArrow from '../../assets/images/drawable/left-arrow.png'
const width = Dimensions.get('window').width;
// const route =
//     param={


//     }

const ProductDetails = ({ navigation, route }) => {
    const [active, setActive] = useState(0);
    // const scrollRef = createRef()
    const mountedRef = useRef(true)
    const [productObjectLength, setProductObjectLength] = useState(1)

    const [item, setItem] = useState(
        { link: require('../../assets/images/iphone.jpeg'), price: '19999', ram: '2GB', rom: '16GB', procesor: '2.7GHZ', currencyIcon: require('../../assets/images/rupee.png'), badge: 'old' },
        // { link: require('./assets/images/1.jpeg')},
        // { link: require('./assets/images/2.jpeg')},
        // { link: require('./assets/images/3.jpeg')},
        // { link: require('./assets/images/1.jpeg')}

    )
    useEffect(() => {
        // console.log(route.params.item)      
        // setItem(route.params.item) 
        // console.log(navigation)

        // setItem(route.param.item)
    }, [])
    const productDetails =
    {
        link: require('../../assets/images/iphone.jpeg'),
        name: 'Google Pixel 3a',
        colors: {
            color: [
                { id: 1, name: 'Clearly White', link: require('../../assets/images/iphone.jpeg') },
                { name: 'black', link: require('../../assets/images/iphone.jpeg') }]
        },
        varients:{
            varient:[{
                rom:128,
                ram:8,
                price:20000,
                color:''
            }]

        },
        price: '19999',
        ram: '2GB', rom: '16GB', procesor: '2.7GHZ',
        currencyIcon: require('../../assets/images/rupee.png'), badge: 'old'
    }

    useEffect(() => {
    })

    const changeHandler = ({ nativeEvent }) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
        if (slide !== active) {
            console.log('x', nativeEvent.contentOffset.x)
            console.log('y', nativeEvent.layoutMeasurement.width)

            console.log('active----', active)
            console.log('slide----', slide)

            setActive(slide)
        }
        // console.log(event)
    }
    const changeColorHandler = value => {
        console.log(value)
    }
    const navigateTo = (value) => {
        console.log(value)
        navigation.navigate(value)
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#ccc' }}>

            <View style={{ flex: .7, backgroundColor: 'white', elevation: .5 }}>


                <ScrollView
                    horizontal
                    pagingEnabled
                    // onScroll={e => changeHandler(e)}
                    showsHorizontalScrollIndicator={false}
                    alwaysBounceHorizontal={false}
                    // onMomentumScrollEnd={changeHandler}
                    // ref={scrollRef}

                    style={{ height: 400, width: width, backgroundColor: null }}
                >
                    {/* {product.map((item, index) => */}

                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <Image source={item.link} style={{ height: 400, width: width }} resizeMode={'center'} />
                    </View>

                    {/* )} */}
                </ScrollView>

                {/* <View style={{ flex: 1, position: 'absolute', bottom: 0, flexDirection: 'row', alignSelf: 'center' }}>
                    {product.map((i, k) =>
                        <Text key={k} style={{ fontSize: 40, color: k == active ? 'gray' : '#ccc' }}>•</Text>
                    )}
                </View> */}
                <TouchableNativeFeedback onPress={() => { navigateTo('Home') }}>
                    <Image source={LeftArrow} style={{
                        position: 'absolute', bottom: 360, left: 10, alignSelf: 'center', height: 25, width: 25, backgroundColor: 'white', resizeMode: 'contain'
                    }} />
                </TouchableNativeFeedback>
                {/* <Text style={{position:'absolute',bottom:350,left:50,alignSelf:'center'}}>--</Text> */}
            </View>

            <View style={{ flex: .4, backgroundColor: 'white', }}>
                <View style={{ flex: .6, backgroundColor: null }}>
                    <View style={{ flex: .3, backgroundColor: null, justifyContent: 'center' }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Select Color</Text>
                    </View>
                    <View style={{ flex: .7, backgroundColor: null, flexDirection: 'row' }}>
                        {productDetails.colors.color.map((item, key) =>
                            <TouchableOpacity style={{ flex: .25 }} key={key} onPress={() => { changeColorHandler(item.name) }}>
                                <View style={{ flex: 1, backgroundColor: null, justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{
                                        width: 90, backgroundColor: null, marginLeft: 8, borderWidth: .5,
                                        borderColor: '#ccc', justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        {/* <Text >{item.value}</Text> */}
                                        <Image source={item.link} style={{ width: 80, height: 80 }} resizeMode='cover' />
                                    </View>
                                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#ccc' }}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>)}
                    </View>
                </View>
                <View style={{ flex: .4, elevation: 2, backgroundColor: 'red' }}>

                </View>

            </View>

        </View>
    )
}

export default ProductDetails;
