/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Image} from 'react-native';
import {styles} from '../styles/styles';

const InputPassword = (props) => {
  const [visible, setVisible] = useState(false);
  return (
    <View style={[styles.input, {flexDirection: 'row', alignItems: 'center'}]}>
      <TextInput
        inlineImageLeft="search_icon"
        secureTextEntry={!visible}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        style={{flex: 1}}
      />
      <TouchableOpacity onPress={() => setVisible(!visible)}>
        <Image
          source={
            visible
              ? require('../assets/icons/visibility_24px_outlined.png')
              : require('../assets/icons/visibility_off_24px_outlined.png')
          }
        />
      </TouchableOpacity>
    </View>
  );
};

export default InputPassword;
