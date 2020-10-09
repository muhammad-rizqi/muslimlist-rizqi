import React, {Component} from 'react';
import {Text, View, Image, ActivityIndicator, StatusBar} from 'react-native';
import {styles} from '../../styles/styles';

class Splash extends Component {
  render() {
    return (
      <View style={[styles.container, styles.centerContent]}>
        <StatusBar backgroundColor="#2F4F4F" barStyle="light-content" />
        <Image
          source={require('../../assets/images/shopping-list1.png')}
          style={styles.splashImage}
        />
        <Text style={styles.splashText}>Muslim List</Text>
        <ActivityIndicator
          color="#2AF598"
          size="large"
          style={styles.splashIndicator}
        />
      </View>
    );
  }
}

export default Splash;
