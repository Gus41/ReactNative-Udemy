import React from "react";
import { SafeAreaView, Text } from "react-native";
import CentralText from "./components/CentralText";
import ScreenA from "./views/ScreenA";
import ScreenC from "./views/ScreenC";
import ScreenB from "./views/ScreenB";
export default props=>{
    return(
    <SafeAreaView style={{flex:1}}>
        <ScreenA />
        <ScreenB />
        <ScreenC />
    </SafeAreaView>
    )
}