import React, { useContext } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";
import Initial from "../screens/Initial";
import Welcome from "../screens/Welcome";
import { AppContext } from "../contexts/AppContext";
import Register from "../screens/Register";
import Edit from "../screens/Edit";

const Drawer = createDrawerNavigator()


const Screen = ()=>{
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:"gray"}}>
            <Text style={{color:"black"}}>Screen</Text>
        </View>
    )
}
export default ()=>{
    const {user} = useContext(AppContext)
    let i = user.name == 'default'? 'Welcome' : 'Initial'
    return(
        <NavigationContainer>
            <Drawer.Navigator initialRouteName={i}>
                {user.name == 'default' ? <Drawer.Screen name="Welcome" component={Welcome} /> : false}
                <Drawer.Screen name="Initial" component={Initial} />
                <Drawer.Screen name="Profile" component={Register} />
                <Drawer.Screen name="Drinks" component={Edit} options={{title:'Minhas Bebidas'}} />
                <Drawer.Screen name="Assets" component={Screen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}