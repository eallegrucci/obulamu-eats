import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './HomeScreen'
import PregantWomenScreen from './PregnantWomen'
import NewBornScreen from './Newborns'
import ToddlerScreen from './Toddlers'
import AdultsScreen from './Adults'

const Stack = createStackNavigator()

function Home() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Pregnant Women" component={PregantWomenScreen} />
            <Stack.Screen name="New Borns" component={NewBornScreen} />
            <Stack.Screen name="Toddlers" component={ToddlerScreen} />
            <Stack.Screen name="Adults" component={AdultsScreen} />
        </Stack.Navigator>
    )
}

export default Home
