import React from 'react';
import { View, Text, Button } from 'react-native';


export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button
            title="Plate"
            onPress={() => navigation.navigate('Plate')}
          />
          <Button
            title="Pregnant Women"
            onPress={() => navigation.navigate('Pregnant Women')}
          />
          <Button
            title="New Born"
            onPress={() => navigation.navigate('New Born')}
          />
          <Button
            title="Toddler"
            onPress={() => navigation.navigate('Toddler')}
          />
          <Button
            title="Adolescent"
            onPress={() => navigation.navigate('Adolescent')}
          />
          <Button
            title="Adult"
            onPress={() => navigation.navigate('Adult')}
          />
          <Button
            title="Unhealthy"
            onPress={() => navigation.navigate('Unhealthy')}
          />
        </View>
      );
}