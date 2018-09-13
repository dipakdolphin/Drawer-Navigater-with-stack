import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {createDrawerNavigator} from 'react-navigation'
import HomeScreen from './HomeScreen'
import SettingScreen from './SettingScreen'
class App extends Component{
  render() {
    return (
      
        <MyApp />
        
    );
  }
}
const MyApp = createDrawerNavigator({
  Home:HomeScreen,
  Settings:SettingScreen
  
})


export default App;