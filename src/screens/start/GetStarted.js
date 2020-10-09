import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, StatusBar} from 'react-native';
import {styles} from '../../styles/styles';

class GetStarted extends Component {
  render() {
    return (
      <View style={[styles.container, styles.centerContent]}>
        <StatusBar backgroundColor="#2F4F4F" barStyle="light-content" />
        <Image
          source={require('../../assets/images/undraw_Process_re_gws71.png')}
          style={styles.getStartedImage}
        />
        <Text style={styles.getStartedText}>Mari List Target Antum </Text>
        <Text style={styles.getStartedDesc}>
          Merapikan Target Antum dengan aplikasi Muslim List
        </Text>
        <View style={styles.getStartedButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default GetStarted;
