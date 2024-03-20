import React, { useContext } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";
import Initial from "../screens/Initial";
import Welcome from "../screens/Welcome";
import { AppContext } from "../contexts/AppContext";
import Register from "../screens/Register";
import Edit from "../screens/Edit";
import Historic from "../screens/Historic";

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
            <Drawer.Navigator  initialRouteName={i}>
                {user.name == 'default' ? <Drawer.Screen options={{headerShown:false}} name="Welcome" component={Welcome} /> : false}
                <Drawer.Screen options={{headerShown:true}} name="Initial" component={Initial} />
                <Drawer.Screen options={{headerShown:false}} name="Profile" component={Register} />
                <Drawer.Screen name="Drinks" component={Edit} options={{title:'Minhas Bebidas',headerShown:false}} />
                <Drawer.Screen options={{headerShown:false}} name="Historic" component={Historic} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}