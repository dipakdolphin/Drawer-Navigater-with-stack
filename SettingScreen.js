import React,{Component} from 'react';
import{
    View,Text,StyleSheet
} from 'react-native';
import{Icon,Button,Container,Header,Content,Left} from 'native-base'

class SettingScreen extends Component{
    render(){
        return(
           <Container>
               <Content>
                   <Text style={{alignSelf:'center',paddingTop:250,fontWeight:'500',fontSize:26}}>Settings Screen</Text>
               </Content>
           </Container>
        )
    }
}

export default SettingScreen;