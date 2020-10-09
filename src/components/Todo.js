/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, TouchableOpacity, Image, Alert} from 'react-native';
import {styles} from '../styles/styles';

const Todo = (props) => {
  const [strike, setStrike] = useState(props.done);
  const testing = () => {
    Alert.alert('Not Implemented yet');
  };
  return (
    <TouchableOpacity style={styles.todo} onPress={() => testing()}>
      <TouchableOpacity style={styles.todoIcon} onPress={() => testing()}>
        <Image
          source={require('../assets/icons/edit1.png')}
          style={{width: 23, height: 20}}
        />
      </TouchableOpacity>
      <Text
        style={{
          flex: 1,
          color: '#373639',
          textDecorationLine: strike ? 'line-through' : 'none',
        }}>
        {props.text}
      </Text>
      <TouchableOpacity
        style={styles.todoIcon}
        onPress={() => setStrike(!strike)}>
        <Image
          source={require('../assets/icons/checklist-checked-box1.png')}
          style={{width: 21, height: 18}}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.todoIcon} onPress={() => testing()}>
        <Image
          source={require('../assets/icons/delete1.png')}
          style={{width: 15, height: 19}}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default Todo;
