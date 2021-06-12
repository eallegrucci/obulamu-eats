import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#29b6f6",
    padding: 10,
    margin: 10,
  },
});

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"white" }}>
          {/* <Button
            title="The Plate"
            onPress={() => navigation.navigate('The Plate')}
          /> */}
          <Text style={{ color:"#29b6f6", fontSize:28, fontWeight:'bold', paddingBottom:20 }}>Obulamu Eats</Text>
          <TouchableOpacity
            style={styles.button}
            title="Pregnant Women"
            onPress={() => navigation.navigate('Pregnant Women')}
          >
            <Text>Pregnant Women</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            title="New Borns"
            onPress={() => navigation.navigate('New Borns')}
          >
            <Text>New Borns</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            title="Toddlers"
            onPress={() => navigation.navigate('Toddlers')}
          >
            <Text>Toddlers</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            title="Adults and Adolescents"
            onPress={() => navigation.navigate('Adults')}
          >
            <Text>Adults and Adolescents</Text>
          </TouchableOpacity>
        </View>
      );
}