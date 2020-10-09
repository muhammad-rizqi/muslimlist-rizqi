/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, View, Text, TouchableOpacity, Alert} from 'react-native';
import {styles} from '../styles/styles';

const SocialButton = () => {
  return (
    <View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.lineSocialButton} />
        <Text style={styles.authTextGrey}>Log in with social account</Text>
        <View style={styles.lineSocialButton} />
      </View>

      <View
        style={[styles.inputGroup, {flexDirection: 'row', marginVertical: 30}]}>
        <TouchableOpacity
          style={styles.fbButton}
          onPress={() => Alert.alert('Login with Facebook')}>
          <Image
            source={require('../assets/icons/Shape.png')}
            style={{marginRight: 4}}
          />
          <Text style={styles.buttonText}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.googleButton}
          onPress={() => Alert.alert('Login with Google')}>
          <Image
            source={require('../assets/icons/Apple.png')}
            style={{marginRight: 4}}
          />
          <Text style={styles.buttonText}>Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SocialButton;
