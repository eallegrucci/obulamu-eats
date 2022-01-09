import React from 'react'
import { ScrollView } from 'react-native'
import ImageContainer from './ImageContainer'

const ToddlersScreen = () => {
    return (
        <ScrollView
            horizontal={true}
            pagingEnabled={true}
        >
            <ImageContainer source={require('../assets/m3_s1.png')} />
            <ImageContainer source={require('../assets/m3_s2.png')} />
            <ImageContainer source={require('../assets/m3_s3.png')} />
            <ImageContainer source={require('../assets/plate_1.png')} />
            <ImageContainer source={require('../assets/plate_2.png')} />
            <ImageContainer source={require('../assets/plate_3.png')} />
            <ImageContainer source={require('../assets/m3_s4.png')} />
        </ScrollView>
    )
}

export default ToddlersScreen
