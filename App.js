import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Button 
} from 'react-native';
import MainNavigator from './app/router';
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './app/screens/welcome';
import LoginScreen from './app/screens/login';
import BeepScreen from './app/screens/beeps';

const AppContainer = createAppContainer({AppNavigator});

const AppNavigator = createStackNavigator(
  { 
    Home: HomeScreen,
    Login: LoginScreen,
    Beep: BeepScreen
  },{
    initialRouteName: "Beep"
  }
);

export default createAppContainer(AppNavigator);