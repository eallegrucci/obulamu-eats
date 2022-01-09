import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './styles'


const Pressable = ({ title, onPress }) => {
  return (
    <TouchableOpacity
        style={styles.button}
        title={title}
        onPress={onPress}
      >
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
  )
}

export default Pressable
