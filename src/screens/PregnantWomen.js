import React from 'react';
import { ScrollView, Dimensions, Image, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: "#b2dfdb"
    }
});

export default function PregnantWomenScreen() {
    return (
        <ScrollView
            horizontal={true}
            pagingEnabled={true}
        >
            <View style={styles.container}>
                <Image 
                    style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height-75 }}
                    resizeMode="contain"
                    source={require('../assets/m1_s1.png')} />
            </View>
            <View style={styles.container}>
                <Image 
                    style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height-75 }}
                    resizeMode="contain"
                    source={require('../assets/m1_s2.png')} />
            </View>
            <View style={styles.container}>
                <Image 
                    style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height-75 }}
                    resizeMode="contain"
                    source={require('../assets/m1_s3.png')} />
            </View>
            <View style={styles.container}>
                <Image 
                    style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height-75 }}
                    resizeMode="contain"
                    source={require('../assets/m1_s4.png')} />
            </View>
            <View style={styles.container}>
                <Image 
                    style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height-75 }}
                    resizeMode="contain"
                    source={require('../assets/plate_1.png')} />
            </View>
            <View style={styles.container}>
                <Image 
                    style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height-75 }}
                    resizeMode="contain"
                    source={require('../assets/plate_2.png')} />
            </View>
            <View style={styles.container}>
                <Image 
                    style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height-75 }}
                    resizeMode="contain"
                    source={require('../assets/plate_3.png')} />
            </View>
            <View style={styles.container}>
                <Image 
                    style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height-75 }}
                    resizeMode="contain"
                    source={require('../assets/m1_s5.png')} />
            </View>
            <View style={styles.container}>
                <Image 
                    style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height-75 }}
                    resizeMode="contain"
                    source={require('../assets/m1_s6.png')} />
            </View>
        </ScrollView>
    )
}