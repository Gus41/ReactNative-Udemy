import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";
import Initial from "../screens/Initial";

const Drawer = createDrawerNavigator()


const Screen = ()=>{
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:"gray"}}>
            <Text style={{color:"black"}}>Screen</Text>
        </View>
    )
}
export default ()=>{
    return(
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Initial" component={Initial} />
                <Drawer.Screen name="Assets" component={Screen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}