import React from 'react'
import { ScrollView } from 'react-native'
import ImageContainer from './ImageContainer'

const PregnantWomenScreen = () => {
    return (
        <ScrollView
            horizontal={true}
            pagingEnabled={true}
        >
            <ImageContainer source={require('../assets/m1_s1.png')} />
            <ImageContainer source={require('../assets/m1_s2.png')} />
            <ImageContainer source={require('../assets/m1_s3.png')} />
            <ImageContainer source={require('../assets/m1_s4.png')} />
            <ImageContainer source={require('../assets/plate_1.png')} />
            <ImageContainer source={require('../assets/plate_2.png')} />
            <ImageContainer source={require('../assets/plate_3.png')} />
            <ImageContainer source={require('../assets/m1_s5.png')} />
            <ImageContainer source={require('../assets/m1_s6.png')} />
        </ScrollView>
    )
}

export default PregnantWomenScreen
