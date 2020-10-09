/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, TextInput, TouchableOpacity, View, StatusBar} from 'react-native';
import {styles} from '../../styles/styles';

class ForgotPassword extends Component {
  render() {
    return (
      <View style={styles.authContainer}>
        <StatusBar backgroundColor="#fcfcfc" barStyle="dark-content" />

        <View style={styles.authContent}>
          <Text style={styles.authTitle}>Reset Password</Text>
          <Text style={{color: '#B0B0B0'}}>
            Please enter your email below to receive your password reset
            instructions.
          </Text>

          <View style={styles.inputGroup}>
            <Text style={styles.authText}>Email</Text>
            <TextInput
              style={styles.input}
              onChangeText={() => {}}
              placeholder="example@gmail.com"
            />
          </View>
          <View style={styles.inputGroup}>
            <TouchableOpacity
              style={styles.buttonBlue}
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={styles.buttonText}>Send Email</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default ForgotPassword;
