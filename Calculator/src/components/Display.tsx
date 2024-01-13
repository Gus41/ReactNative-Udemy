import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default (props:any)=>{
    
    return(
       <View style={style.display}>
        <Text style={style.displayText} numberOfLines={1}>{props.value}</Text>
       </View>
    )
}
const style = StyleSheet.create({
    display:{
        flex:1,
        padding:20,
        justifyContent:'center',
        backgroundColor:'black',
        alignItems:'flex-end'
    },
    displayText:{
        color:'white',
        fontSize:60
    }
})