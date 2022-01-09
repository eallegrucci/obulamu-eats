import React from 'react'
import { ScrollView } from 'react-native'
import ImageContainer from './ImageContainer'

const AdultsScreen = () => {
    return (
        <ScrollView
            horizontal={true}
            pagingEnabled={true}
        >
            <ImageContainer source={require('../assets/m4_s1.png')} />
            <ImageContainer source={require('../assets/m4_s2.png')} />
            <ImageContainer source={require('../assets/m4_s3.png')} />
            <ImageContainer source={require('../assets/plate_1.png')} />
            <ImageContainer source={require('../assets/plate_2.png')} />
            <ImageContainer source={require('../assets/plate_3.png')} />
            <ImageContainer source={require('../assets/m4_s4.png')} />
            <ImageContainer source={require('../assets/m4_s5.png')} />
            <ImageContainer source={require('../assets/m4_s6.png')} />
            <ImageContainer source={require('../assets/m4_s7.png')} />
        </ScrollView>
    )
}

export default AdultsScreen
