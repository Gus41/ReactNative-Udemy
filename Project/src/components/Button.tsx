import { Text, Dimensions,TouchableHighlight, StyleSheet, View } from "react-native";
import React from "react";


export default (props: any)=>{
    return(
        <TouchableHighlight onPress={props.click}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>+</Text>
            </View>
        </TouchableHighlight>
    )
}
const styles = StyleSheet.create({
    button:{
        color:'white',
        backgroundColor:'#00ACD9',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        textShadowColor:'black',
        width:60,
        height:60,
        textAlign:'center',
        marginBottom:10
    },
    buttonText:{
        color:'white',
        fontWeight:'bold',
        textShadowColor:'black',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    }
})