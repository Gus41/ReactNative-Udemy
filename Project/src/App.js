import { NavigationContainer } from "@react-navigation/native";
import { Component } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Register from "./screens/Register";
import Welcome from "./screens/Welcome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Initial from "./screens/Initial";
import Edit from "./screens/Edit";
import Historic from "./screens/Historic";
import { DayProvider } from "../context/DayContext";
import moment from "moment";

const Stack = createNativeStackNavigator()

export default class App extends Component{
    state = {
        user:null,
        atualDay:null,
        initialRouteName:'Initial'
    }
    updateDay = ()=>{

    }
    componentDidMount = async()=>{
        try{
            console.log("=============")
            const atualDay = await AsyncStorage.getItem("AtualDay")
            const user = await AsyncStorage.getItem("User")
            const drinks = await AsyncStorage.getItem("Drinks")
            if(atualDay == null){
                await AsyncStorage.setItem("AtualDay",JSON.stringify({day:moment().locale('pt-br').format('DD/MM'), historic:[]}))
            }else{
                this.setState({atualDay: JSON.parse(atualDay)})
            }
            console.log("===========DATABASE========== ")
            console.log("Drinks : " + drinks)
            console.log("User: " + user)
            console.log("AtualDay: " + atualDay)

            if(user !== null){

                this.setState({user:JSON.parse(user),initialRouteName:'front'})
                console.log(this.state.initialRouteName)
                return
            }
            await AsyncStorage.setItem("Drinks",JSON.stringify([500,1000,1500,2000]))
            this.setState({initialRouteName:'Welcome'})
            this.render = ()=>{
                return(
                    <DayProvider>
                        <NavigationContainer>
                            <Stack.Navigator initialRouteName={this.state.initialRouteName}>
                                <Stack.Screen name="Welcome" component={Welcome} options={{headerShown:false}} />
                                <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
                                <Stack.Screen name="Edit" component={Edit} options={{headerShown:false}} />
                                <Stack.Screen initialParams={{data:this.state.atualDay}} name="Historic" component={Historic} options={{headerShown:false, animation:'default', }} />
                            </Stack.Navigator>
                        </NavigationContainer>
                    </DayProvider>
                )
            }
            

            console.log("Valores salvos no banco de dados")
        }catch(e){
            console.log(e)
        }
    }
    
    render = ()=>{
        if(this.state.user != null){
            
            return(
                <DayProvider>
                        <NavigationContainer>
                            <Stack.Navigator initialRouteName={this.state.initialRouteName}>
                                <Stack.Screen initialParams={this.updateDay} name="front"  component={Initial} options={{headerShown:false, animation:'default'}}/>
                                <Stack.Screen name="Edit" component={Edit} options={{headerShown:false}} />
                                <Stack.Screen initialParams={{data:this.state.atualDay}} name="Historic" component={Historic} options={{headerShown:false, animation:'default', }} />
                            </Stack.Navigator>
                        </NavigationContainer>
                </DayProvider>
                )
        }else{
            console.log("Dentro do if")
            return(
                <DayProvider>
                    <NavigationContainer>
                        <Stack.Navigator>
                            <Stack.Screen name="Welcome" component={Welcome} options={{headerShown:false}} />
                            <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
                        </Stack.Navigator>
                    </NavigationContainer>
                </DayProvider>   
            )
            
        }
    }
}