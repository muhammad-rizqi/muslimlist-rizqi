import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from '../styles/styles';
export default function FloatingButton(props) {
  return (
    <TouchableOpacity
      style={styles.floatingButton}
      onPress={() => props.onPress()}>
      <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>
  );
}
