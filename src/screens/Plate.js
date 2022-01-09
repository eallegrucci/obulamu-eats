import React from 'react'
import { ScrollView } from 'react-native'
import ImageContainer from './ImageContainer'

const PlateScreen = () => {
    return (
        <ScrollView
            horizontal={true}
            pagingEnabled={true}
        >
            <ImageContainer source={require('../assets/plate_1.png')} />
            <ImageContainer source={require('../assets/plate_2.png')} />
            <ImageContainer source={require('../assets/plate_3.png')} />
        </ScrollView>
    )
}

export default PlateScreen
