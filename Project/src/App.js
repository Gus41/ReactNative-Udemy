import { NavigationContainer } from "@react-navigation/native";
import { Component } from "react";
import { Text, View,StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Register from "./screens/Register";
import Welcome from "./screens/Welcome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Initial from "./screens/Initial";
import { firstAcces, saveDrinkValues } from "./functions";
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
                console.log("User: " + user)
                this.setState({user:JSON.parse(user)})
                return true
            }
            return false
        }catch(e){
            console.log(e)
        }
    }
    componentDidMount = async()=>{
        if(firstAcces()){
            saveDrinkValues({drinks:[500,1000,1500,2000]})
        }
        const user = await AsyncStorage.getItem("User")
        if(user !== null){
            this.setState({user:JSON.parse(user)})
            console.log(this.state)

            return
        }
        this.setState({user:null})
    }
    render = ()=>{
        return(
            <NavigationContainer>
                <Stack.Navigator initialRouteName={this.state.user == null?'Initial':'Welcome'}>
                    <Stack.Screen name="Initial"  component={Initial} options={{headerShown:false, animation:"simple_push"}}/>
                    <Stack.Screen name='Welcome' component={Welcome} options={{headerShown:false}} />
                    <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}