import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Field from "./Field";
import Flag from "./Flag";
import { Text } from "react-native";

export default (props)=>{

    return(
        <View style={styles.container}>
            <View style={styles.flagContainer}>
                <TouchableOpacity  
                    onPress={props.onFlagPress}
                    style={styles.flagButton}
                    
                >
                    <Flag bigger/>
                </TouchableOpacity>
                <Text style={styles.flagsLeft}> - {props.flagsLeft}</Text>
            </View>
            <TouchableOpacity style={styles.button}
            onPress={props.onNewGame}
            >
                <Text style={styles.buttonLabel}>New Game</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'#EEE',
        alignItems:'center',
        justifyContent:'space-around',
        paddingTop:10,
        paddingHorizontal:20
    },
    flagContainer:{
        flexDirection:'row'
    },
    flagButton:{
        marginTop:20,
        minWidth:30
    },
    flagsLeft:{
        fontSize:30,
        fontWeight:'bold',
        paddingTop:5,
        marginLeft:20
    },
    button:{
        backgroundColor:'red',
        padding:8,
        borderRadius:5,
    },
    buttonLabel:{
        fontSize:20,
        color:'white',
        fontWeight:'bold',
    }
})