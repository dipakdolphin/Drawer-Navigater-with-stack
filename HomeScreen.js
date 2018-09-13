import React,{Component} from 'react';
import Profile from './Profile'
import {createStackNavigator} from 'react-navigation'
import{
    View,Text,StyleSheet,Button,
} from 'react-native';
import {Icon,Container,Header,Content,Left} from 'native-base'

class HomeScreen extends Component{
    render(){
        return(
          <View>
              <Text style={{alignSelf:'center',paddingTop:250,fontWeight:'500',fontSize:26}}>
                  Home creen
              </Text>
              <Button title='Goto Profile'
              onPress={()=> this.props.navigation.navigate('Profile')} />
          </View>
        )
    }
}

export default createStackNavigator({
    Home:HomeScreen,
    Profile:Profile
     
  });

const styles = StyleSheet.create({
    text: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    
  });