import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import PlateScreen from './Plate';
import PregantWomenScreen from './PregnantWomen';
import NewBornScreen from './Newborns';
import ToddlerScreen from './Toddlers';
import AdultScreen from './Adults';

const Stack = createStackNavigator();

function Home() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="The Plate" component={PlateScreen} />
            <Stack.Screen name="Pregnant Women" component={PregantWomenScreen} />
            <Stack.Screen name="New Borns" component={NewBornScreen} />
            <Stack.Screen name="Toddlers" component={ToddlerScreen} />
            <Stack.Screen name="Adults" component={AdultScreen} />
        </Stack.Navigator>
    );
}

export default Home;