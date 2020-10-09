/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import Home from '../screens/app/Home';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import {styles} from '../styles/styles';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  const testing = () => {
    alert('Not implemented yet');
  };
  return (
    <DrawerContentScrollView {...props}>
      <View style={{flex: 1, height: 500}}>
        <Image
          source={require('../assets/images/profile1.png')}
          style={styles.drawerImage}
        />
        <Text style={styles.drawerTitle}>Muhammad Rizqi</Text>
        <Text style={styles.drawerDesc}>@muhammad-rizqi</Text>
        <View style={styles.followers}>
          <Text style={styles.drawerTitle}>202 </Text>
          <Text style={styles.drawerDesc}>Followers </Text>
          <Text style={styles.drawerTitle}>202 </Text>
          <Text style={styles.drawerDesc}>Following</Text>
        </View>
        <TouchableOpacity style={styles.drawerItem} onPress={() => testing()}>
          <Image
            source={require('../assets/icons/Star1.png')}
            style={styles.drawerIcon}
          />
          <Text style={styles.drawerText}>Popular</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem} onPress={() => testing()}>
          <Image
            source={require('../assets/icons/bookmark_24px_outlined.png')}
            style={styles.drawerIcon}
          />
          <Text style={styles.drawerText}>Bookmarks</Text>
        </TouchableOpacity>
      </View>
      <View style={{position: 'absolute', bottom: 0, right: 0}}>
        <TouchableOpacity
          style={styles.drawerButton}
          onPress={() => props.navigation.navigate('Login')}>
          <Text style={styles.textGrey}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

const AppDrawer = () => {
  return (
    <Drawer.Navigator
      drawerStyle={styles.drawerStyle}
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
};

export default AppDrawer;
