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
        user:null
    }
    hasUser = async()=>{
        try{
            const user = await AsyncStorage.getItem('User')
            console.log(user)
            if(user!= null){
                console.log(user)
                this.setState({user:JSON.parse(user)})
                return true
            }
            return false
        }catch(e){
            console.log(e)
        }
    }
    componentDidMount = async()=>{
        const user = await AsyncStorage.getItem("User")
        if(user !== null){
            this.setState({user:JSON.parse(user)})
            return
        }
        this.setState({user:null})
    }
    render = ()=>{
        console.log(this.state.user)
        return(
            <NavigationContainer>
                <Stack.Navigator initialRouteName={()=>{
                    if(this.state.user == null){
                        return 'Welcome'
                    }else{
                        return 'Initial'
                    }
                }} >
                    <Stack.Screen name="Initial" component={Initial} options={{headerShown:false}}/>
                    <Stack.Screen name='Welcome' component={Welcome} options={{headerShown:false}} />
                    <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
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