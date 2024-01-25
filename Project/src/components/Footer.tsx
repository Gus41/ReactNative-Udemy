import { Text,TouchableHighlight, StyleSheet, View, Image } from "react-native";
import React from "react";
import Button from "./Button";
import { test } from "../functions";
export default (props:any)=>{
    return(
        <View>
            <Button click={test}/>
        </View>
    )
}