import React from 'react'
import { View, Text } from 'react-native'
import Pressable from './Pressable'
import styles from './styles'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Obulamu Eats</Text>
      <Pressable
        title='Pregnant Women'
        onPress={() => navigation.navigate('Pregnant Women')}
      />
      <Pressable
        title='New Borns'
        onPress={() => navigation.navigate('New Borns')}
      />
      <Pressable
        title='Toddlers'
        onPress={() => navigation.navigate('Toddlers')}
      />
      <Pressable
        title='Adults and Adolescents'
        onPress={() => navigation.navigate('Adults')}
      />
    </View>
  )
}

export default HomeScreen
