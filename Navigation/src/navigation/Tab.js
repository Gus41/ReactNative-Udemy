import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import ScreenA from "../views/ScreenA"
import ScreenC from "../views/ScreenC"
import ScreenB from "../views/ScreenB"

const Tab = createBottomTabNavigator()
export default(props)=>{
    return(
        <Tab.Navigator screenOptions={{
            headerTintColor:'red',
            tabBarInactiveBackgroundColor:'black',
        }}>
            <Tab.Screen name="ScreenA" component={ScreenA} />
            <Tab.Screen name="ScreenB" component={ScreenB} />
            <Tab.Screen name="ScreenC" component={ScreenC} />
        
        </Tab.Navigator>
    )
}
