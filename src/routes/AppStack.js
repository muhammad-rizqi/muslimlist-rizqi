import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import GetStarted from '../screens/start/GetStarted';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import ForgotPasword from '../screens/auth/ForgotPassword';
import AppDrawer from './AppDrawer';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="GetStarted"
          component={GetStarted}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerTitleStyle: {display: 'none'},
            headerStyle: {
              elevation: 0,
              backgroundColor: '#FCFCFC',
            },
          }}
        />
        <Stack.Screen
          name="Forgot Password"
          component={ForgotPasword}
          options={{
            headerTitleStyle: {display: 'none'},
            headerStyle: {
              elevation: 0,
              backgroundColor: '#FCFCFC',
            },
          }}
        />
        <Stack.Screen
          name="Drawer"
          component={AppDrawer}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
