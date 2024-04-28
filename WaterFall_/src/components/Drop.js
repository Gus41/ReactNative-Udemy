import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default props=>{
    console.log(props)
    return(
        <View style={{
            justifyContent:"space-between",
            flexDirection:'row',
            alignItems:"center",
            borderBottomWidth:1,
            borderBottomColor:"white"
        }}>
            <View style={styles.container}>
                <Text style={styles.text}>{props.amount}</Text>
            </View>
            <TouchableOpacity 
                onPress={()=>props.delete(props.id)}
            >
                <View style={styles.delete}>
                    <Text style={{color:'white'}}>Remover</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    delete:{
        color:"#30D3F6",
        borderWidth:1,
        borderColor:'#30D3F6',
        backgroundColor: '#000018',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        width:100,
        margin:10
    },
    container:{
        borderWidth:1,
        borderColor:'white',
        padding:10,
        margin:10,
        height:80,
        width:80,
        borderRadius:40,
        justifyContent:"center",
        alignItems:'center'
    },
    text:{
        color:"white",
        textAlign:"center"
    }
})