import React from 'react';
import { View, Button } from 'react-native';


export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button
            title="The Plate"
            onPress={() => navigation.navigate('The Plate')}
          />
          <Button
            title="Pregnant Women"
            onPress={() => navigation.navigate('Pregnant Women')}
          />
          <Button
            title="New Borns"
            onPress={() => navigation.navigate('New Borns')}
          />
          <Button
            title="Toddlers"
            onPress={() => navigation.navigate('Toddlers')}
          />
          <Button
            title="Adults and Adolescents"
            onPress={() => navigation.navigate('Adults')}
          />
        </View>
      );
}