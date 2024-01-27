import React from "react";
import { SafeAreaView, Text, View } from "react-native";


export default(props)=>{
    return(
        <View style={{
            flex:1,
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:props.bc || 'white'
        }}>
            <Text style={
                {
                    fontSize:50,
                    color:props.txtC || 'black'
                }
            }>
                {props.children}
            </Text>
        </View>
    )
}