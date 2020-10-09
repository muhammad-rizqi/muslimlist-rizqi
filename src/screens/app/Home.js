/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  TouchableOpacity,
  ScrollView,
  Image,
  Text,
  TextInput,
  View,
  StatusBar,
} from 'react-native';
import FloatingButton from '../../components/FloatingButton';
import Todo from '../../components/Todo';
import {styles} from '../../styles/styles';

class Home extends Component {
  render() {
    return (
      <View style={styles.authContainer}>
        <StatusBar backgroundColor="#fcfcfc" barStyle="dark-content" />
        <ScrollView>
          <View style={styles.homeContent}>
            <TouchableOpacity
              style={styles.headerBar}
              onPress={() => this.props.navigation.openDrawer()}>
              <Image
                source={require('../../assets/images/profile1.png')}
                style={styles.headerIcon}
              />
              <View>
                <Text style={styles.headerTitle}>Hi Muhammad Rizqi, </Text>
                <Text style={styles.textGrey}>How’re you today?</Text>
              </View>
            </TouchableOpacity>
            <View style={{marginTop: 40, marginBottom: 30}}>
              <View style={styles.searchBar}>
                <Image source={require('../../assets/icons/Search.png')} />
                <TextInput
                  style={{flex: 1}}
                  placeholder="Search your target....."
                />
              </View>
            </View>
            <View>
              <Text style={styles.homeTitle}>Your Target</Text>
              <View style={{marginTop: 8}}>
                <Todo text="Membuat Aplikasi Muslim List" done={false} />
                <Todo text="Membuat Desain Aplikasi Muslim List" done={false} />
                <Todo text="Membuat UI Aplikasi Muslim List" done={false} />
                <Todo text="Membuat Alur Aplikasi Muslim List" done={true} />
                <Todo text="Membuat Login Aplikasi Muslim List" done={true} />
                <Todo
                  text="Membuat Register Aplikasi Muslim List"
                  done={false}
                />
                <Todo text="Membuat Aplikasi Muslim List" done={true} />
                <Todo text="AsyncStorage Aplikasi Muslim List" done={true} />
                <Todo text="Todo Aplikasi Muslim List" done={false} />
                <Todo text="Membuat Aplikasi Muslim List" done={true} />
                <Todo text="Membuat Aplikasi Muslim List" done={false} />
              </View>
            </View>
          </View>
        </ScrollView>
        <FloatingButton onPress={() => alert('Not Implemented yet')} />
      </View>
    );
  }
}

export default Home;
