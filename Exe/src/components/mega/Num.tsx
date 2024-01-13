import React, { useState }  from "react";
import { Alert, Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import styles from "../../styles";

export default (props:any)=>{
    return(
        <View style={style.Ball}>
            <Text style={style.Num}>{props.num}</Text>
        </View>
    )
}
const style = StyleSheet.create({
    Ball:{
        width:50,
        height:50,
        backgroundColor:'black',
        margin:5,
        borderRadius:25
    },
    Num:{
        color:'white',
        fontSize: 18,
        fontWeight: '400',
        textAlign:'center',
    }
})
