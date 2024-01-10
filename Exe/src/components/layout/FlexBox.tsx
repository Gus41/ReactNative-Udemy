import React, { useState }  from "react";
import { FlatList, Text, TextInput, View } from "react-native";
import styles from "../../styles";
import Box from "./Box";

export default ()=>{
    return(
        <View style={{
            justifyContent :'center',
            alignContent:'center',
            flexDirection:'row',
            backgroundColor:'gray',
            
        }}>
            <Box/>
            <Box/>
            <Box/>
        </View>
    )
}
