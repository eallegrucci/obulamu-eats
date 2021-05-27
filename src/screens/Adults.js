import React from 'react';
import { Text } from 'react-native';
import { ScrollView, Dimensions, Image, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: "#f2dac8" //peach
    }
});

export default function AdultssScreen() {
    return (
        <Text>Adults</Text>
        // <ScrollView
        //     horizontal={true}
        //     pagingEnabled={true}
        // >
        //     <View style={styles.container}>
        //         <Image 
        //             style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height-75 }}
        //             resizeMode="contain"
        //             source={require('../assets/M2_S1.png')} />
        //     </View>
        //     <View style={styles.container}>
        //         <Image 
        //             style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height-75 }}
        //             resizeMode="contain"
        //             source={require('../assets/M2_S2.png')} />
        //     </View>
        //     <View style={styles.container}>
        //         <Image 
        //             style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height-75 }}
        //             resizeMode="contain"
        //             source={require('../assets/M2_S3.png')} />
        //     </View>
        //     <View style={styles.container}>
        //         <Image 
        //             style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height-75 }}
        //             resizeMode="contain"
        //             source={require('../assets/M2_S4.png')} />
        //     </View>
        //     <View style={styles.container}>
        //         <Image 
        //             style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height-75 }}
        //             resizeMode="contain"
        //             source={require('../assets/M2_S5.png')} />
        //     </View>
        //     <View style={styles.container}>
        //         <Image 
        //             style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height-75 }}
        //             resizeMode="contain"
        //             source={require('../assets/M2_S6.png')} />
        //     </View>
        // </ScrollView>
    )
}