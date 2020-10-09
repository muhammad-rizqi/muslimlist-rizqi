/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  View,
  ScrollView,
} from 'react-native';
import InputPassword from '../../components/InputPassword';
import SocialButton from '../../components/SocialButton';
import {styles} from '../../styles/styles';

class Login extends Component {
  render() {
    return (
      <View style={styles.authContainer}>
        <StatusBar backgroundColor="#fcfcfc" barStyle="dark-content" />
        <ScrollView>
          <View style={styles.authContent}>
            <Text style={styles.title}>Welcome back !</Text>
            <View style={styles.inputGroup}>
              <Text style={styles.authText}>Email</Text>
              <TextInput
                style={styles.input}
                onChangeText={() => {}}
                placeholder="Email"
              />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.authText}>Password</Text>
              <InputPassword placeholder="Password" />
            </View>
            <View style={styles.inputGroup}>
              <TouchableOpacity
                style={styles.buttonBlue}
                onPress={() => this.props.navigation.navigate('Drawer')}>
                <Text style={styles.buttonText}>Log In</Text>
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 8, marginBottom: 38}}>
              <Text
                style={[styles.authTextGrey, styles.bold]}
                onPress={() =>
                  this.props.navigation.navigate('Forgot Password')
                }>
                Forgot Password ?
              </Text>
            </View>
            <SocialButton />
            <Text style={[styles.textGrey, {textAlign: 'center'}]}>
              Don’t have an account?{' '}
              <Text
                style={styles.textLink}
                onPress={() => this.props.navigation.navigate('Register')}>
                Sign Up
              </Text>
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Login;
