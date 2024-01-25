import { Text, Dimensions,TouchableHighlight, StyleSheet, View, Image } from "react-native";
import React from "react";
import LoadingBar from "./LoadingBar";

export default (props:any)=>{
    return(
        <View style={
            {
                flex:1,
                justifyContent:'center',
                alignItems:'center'
            }
        }>
            <Image
            source={require('../assets/drop.png')}
            />
            <Text style={styles.objective}>Meta: {props.objective}ml</Text>
            <LoadingBar />
        </View>
        
    )
}
const styles = StyleSheet.create({
    objective:{
        color:'#93CBFF',
        margin:5,
        fontSize:15,
        fontWeight:'bold'
    }
})