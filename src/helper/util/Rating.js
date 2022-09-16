import React from 'react'
import { View, Text } from 'react-native'
import { Rating, AirbnbRating } from 'react-native-ratings';


export default function Ratings() {
    return (
        <View>
            <AirbnbRating
                count={5}
                showRating={false}
                defaultRating={2.5}
                size={20}
                onFinishRating={(value)=>alert(value)}
            />
        </View>
    )
}

