import React from "react"
import ScreenA from "../views/ScreenA"
import ScreenC from "../views/ScreenC"
import ScreenB from "../views/ScreenB"
import { createDrawerNavigator } from "@react-navigation/drawer"

const Drawer = createDrawerNavigator()
export default(props)=>{
    return(
        <Drawer.Navigator initialRouteName="ScreenA">
            <Drawer.Screen name="ScreenA" component={ScreenA}/>
            <Drawer.Screen name="ScreenB" component={ScreenB}/>
            <Drawer.Screen name="ScreenC" component={ScreenC}/>
        </Drawer.Navigator>
    )
}
