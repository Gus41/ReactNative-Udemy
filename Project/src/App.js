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
import Historic from "./screens/Historic";
const Stack = createNativeStackNavigator()

export default class App extends Component{
    state = {
        user:null
    }

    componentDidMount = async()=>{
        try{
            console.log("=============")
            const atualDay = await AsyncStorage.getItem("AtualDay")
            const user = await AsyncStorage.getItem("User")
            const drinks = await AsyncStorage.getItem("Drinks")
            if(atualDay == null){
                await AsyncStorage.setItem("AtualDay",JSON.stringify({day: new Date(), historic:[]}))
            }
            console.log("===========DATABASE========== ")
            console.log("Drinks : " + drinks)
            console.log("User: " + user)
            console.log("AtualDay: " + atualDay)

            if(user !== null){

                this.setState({user:JSON.parse(user),initialRouteName:'Initial'})
                return
            }
            await AsyncStorage.setItem("Drinks",JSON.stringify([500,1000,1500,2000]))
            this.setState({initialRouteName:'Welcome'})
            console.log("Valores salvos no banco de dados")
        }catch(e){
            console.log(e)
        }
    }
    render = ()=>{
        console.log(this.state)
        return(
            <NavigationContainer>
                <Stack.Navigator>
                    {this.state.initialRouteName=='Welcome'?
                    <Stack.Screen name='Welcome' component={Welcome} options={{headerShown:false}}/>
                    :
                    false
                    }
                    <Stack.Screen name="Initial"  component={Initial} options={{headerShown:false, animation:'default'}}/>
                    <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
                    <Stack.Screen name="Edit" component={Edit} options={{headerShown:false}} />
                    <Stack.Screen name="Historic" component={Historic} options={{headerShown:false, animation:'default'}} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}