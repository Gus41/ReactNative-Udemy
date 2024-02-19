import { NavigationContainer } from "@react-navigation/native";
import { Component } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Register from "./screens/Register";
import Welcome from "./screens/Welcome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Initial from "./screens/Initial";
import { firstAcces, getDrinkValues, saveDrinkValues } from "./functions";
import Edit from "./screens/Edit";
const Stack = createNativeStackNavigator()

export default class App extends Component{
    state = {
        user:null
    }
    hasUser = async()=>{
        try{
            const user = await AsyncStorage.getItem('User')
            if(user!== null){
                console.log("Usuario já existente")
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
        console.log(user)
        if(user !== null){
            this.setState({user:JSON.parse(user)})
            return
        }
        await AsyncStorage.setItem("Drinks",[500,1000,1500,2000])
        this.setState({user:null})
    }
    render = ()=>{
        console.log(this.state.user)
        let i 
        if(!this.state.user){
            i = 'Initial'
        }else{
            i = 'Welcome'
        }
        return(
            <NavigationContainer>
                <Stack.Navigator initialRouteName={i}>
                    <Stack.Screen name="Initial"  component={Initial} options={{headerShown:false, animation:"slide_from_left"}}/>
                    <Stack.Screen name='Welcome' component={Welcome} options={{headerShown:false}} />
                    <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
                    <Stack.Screen name="Edit" component={Edit} options={{headerShown:false}} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}