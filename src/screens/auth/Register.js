/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
  ScrollView,
} from 'react-native';
import {Picker} from '@react-native-community/picker';
import InputPassword from '../../components/InputPassword';
import SocialButton from '../../components/SocialButton';
import {styles} from '../../styles/styles';

class Register extends Component {
  render() {
    return (
      <View style={styles.authContainer}>
        <StatusBar backgroundColor="#fcfcfc" barStyle="dark-content" />
        <ScrollView>
          <View style={styles.authContent}>
            <Text style={styles.authTitle}>Registration</Text>
            <Text style={styles.textGrey}>
              Already have an account?{' '}
              <Text
                onPress={() => this.props.navigation.navigate('Login')}
                style={styles.textLink}>
                Log In
              </Text>
            </Text>

            <View style={styles.inputGroup}>
              <Text style={styles.authText}>Email</Text>
              <TextInput
                style={styles.input}
                onChangeText={() => {}}
                placeholder="Email"
              />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.authText}>Mobile Number</Text>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={[
                    styles.input,
                    {flexDirection: 'row', alignItems: 'center'},
                  ]}>
                  <Image source={require('../../assets/icons/indonesia.png')} />
                  <Picker
                    itemStyle={{fontSize: 10}}
                    style={{width: 100, color: '#B0B0B0'}}>
                    <Picker.Item label="+62" value="+62" />
                    <Picker.Item label="+63" value="+63" />
                  </Picker>
                </View>
                <TextInput
                  style={[styles.input, {flex: 1, marginLeft: 8}]}
                  onChangeText={() => {}}
                  placeholder="81234567890"
                />
              </View>
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.authText}>Password</Text>
              <InputPassword placeholder="Password" />
            </View>

            <View style={styles.inputGroup}>
              <TouchableOpacity
                style={styles.buttonBlue}
                onPress={() => this.props.navigation.navigate('Login')}>
                <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 24}}>
              <SocialButton />
            </View>
            <Text style={[styles.textGrey, {textAlign: 'center'}]}>
              By clicking sign up you are agreeing to {'\n'} the
              <Text style={styles.textLink}> Term of use</Text> and the
              <Text style={styles.textLink}> Privacy policy</Text>
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Register;
