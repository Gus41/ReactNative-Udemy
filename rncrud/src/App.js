import React from "react";
import {SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserList from "./views/UserList";
import UserForm from "./views/UserForm";
import { Alert, Button, StyleSheet, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { Text } from "@rneui/base";


const Stack = createNativeStackNavigator()
export default function App(){
    return(
        <NavigationContainer>
            <Stack.Navigator 
            initialRouteName="UserList"
            screenOptions={screenOptions}

            >
                <Stack.Screen
                    name="UserList"
                    component={UserList}
                    options={({ navigation})=>{
                        return{
                            title: "Lista de Usuários",
                            headerRight: ()=>(
                                <TouchableOpacity
                                onPress={()=>navigation.navigate('UserForm')}>
                                    <View style={styles.button}>
                                        <Text style={{color:"black",fontWeight:'bold'}}>+</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }
                    }}
                />
                <Stack.Screen
                    name="UserForm"
                    component={UserForm}
                    options={{
                        title:"Formulário de Usuários"
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
const screenOptions = {
    headerStyle : {
        backgroundColor:'#f4511e'
    },
    headerTintColor:'white',
    headerTitleStyle:{
        fontWeight:"bold"
    }
}
const styles = StyleSheet.create({
    button:{
        backgroundColor:"white",
       paddingHorizontal:10,
       borderRadius:5,

    }
})