import { NavigationContainer } from "@react-navigation/native";
import { Component } from "react";
import { Text, View,StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Register from "./screens/Register";
import Welcome from "./screens/Welcome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Initial from "./screens/Initial";
const Stack = createNativeStackNavigator()

export default class App extends Component{
    state = {
        initial : 'Welcome'
    }
    hasUser = async()=>{
        try{
            const user = await AsyncStorage.getItem('User')
            console.log(user)
            if(user!= null){
                console.log(user)
                return true
            }
            return false
        }catch(e){
            console.log(e)
        }
    }
    componentDidMount = async()=>{
        const hasUser = await this.hasUser()
        if(hasUser){
            this.setState({initial:'Initial'})
        }else{
            this.setState({initial:'Welcome'})
        }
        console.log(this.state)
    }
    render = ()=>{
        return(
            <NavigationContainer>
                <Stack.Navigator initialRouteName={this.state.initial}>
                    <Stack.Screen name='Welcome' component={Welcome} options={{headerShown:false}} />
                    <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
                    <Stack.Screen name="Initial" component={Initial} options={{headerShown:false}}/>

                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000018',
      alignItems: 'center',
      flexDirection:'column',
    },
    text:{
      color:"#30D3F6",
      textAlign:'center'
    },
    textTittle:{
        color:"#30D3F6",
        margin:10,
        fontWeight:'400',
        marginTop:50
    },
    logoContainer:{
        alignItems:'center',
        marginTop:60,
    },
    logo:{
      width:60,
      height:70
    },
    centerContain:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        marginBottom:100
    },
    button:{
        borderWidth:1,
        borderColor:'#30D3F6',
        width:200,
        padding:10,
        marginTop:100,
        borderRadius:100
        
    }
  });