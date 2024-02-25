import { NavigationContainer } from "@react-navigation/native";
import { Component } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Register from "./screens/Register";
import Welcome from "./screens/Welcome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Initial from "./screens/Initial";



const Stack = createNativeStackNavigator()
const initialState = {
    user:null,
    atualDay:null,
    initialRouteName:'Welcome',
    historic:null
}
export default class App extends Component{
    state = {
       ...initialState
    }

    componentDidMount = async()=>{
        try{
            const state_str = await AsyncStorage.getItem("state")
            const state_obj = JSON.parse(state_str)
            const state = state_obj || initialState
            this.setState({...state})

        }catch(e){
            console.log(e)
        }
        console.log("-------------------------")
        console.log(this.state)
        console.log("-------------------------")

    }
    add = async (user)=>{
        console.log(this.state.initialRouteName === 'initial')
        const state = this.state
        state.initialRouteName = "initial"
        await AsyncStorage.setItem("state",JSON.stringify(state))
    }
    render = ()=>{
        return(
            <NavigationContainer>
                <Stack.Navigator>
                    {this.state.initialRouteName === 'Welcome'?
                    <Stack.Screen {...this.props} name="Welcome" component={Welcome} />
                    :
                    false
                    }
                    <Stack.Screen initialParams={{

                    }} name="Initial" component={Initial} />
                    <Stack.Screen initialParams={{
                        add: this.add
                    }} name="Register" component={Register} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}