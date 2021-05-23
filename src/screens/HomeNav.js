import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import PlateScreen from './Plate';
import PregantWomenScreen from './PregnantWomen';
import NewBornScreen from './Newborns';
import ToddlerScreen from './Toddlers';
import AdolescentScreen from './Adolescents';
import AdultScreen from './Adults';
import UnhealthyScreen from './Unhealthy';

const Stack = createStackNavigator();

function Home() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Plate" component={PlateScreen} />
            <Stack.Screen name="Pregnant Women" component={PregantWomenScreen} />
            <Stack.Screen name="New Born" component={NewBornScreen} />
            <Stack.Screen name="Toddler" component={ToddlerScreen} />
            <Stack.Screen name="Adolescent" component={AdolescentScreen} />
            <Stack.Screen name="Adult" component={AdultScreen} />
            <Stack.Screen name="Unhealthy" component={UnhealthyScreen} />
        </Stack.Navigator>
    );
}

export default Home;