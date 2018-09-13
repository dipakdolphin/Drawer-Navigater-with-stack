import React,{Component} from 'react';
import{
    View,Text,StyleSheet
} from 'react-native';
import {Icon,Button,Container,Header,Content,Left} from 'native-base'

class Profile extends Component{
    render(){
        return(
           <Container>
               <Content>
                   <Text style={{alignSelf:'center',paddingTop:250,fontWeight:'500',fontSize:26}}>Profile</Text>
               </Content>
           </Container>
        )
    }
}

export default Profile;
const styles = StyleSheet.create({
    text: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    
  });