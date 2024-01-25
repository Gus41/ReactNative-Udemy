import { Text, Dimensions,TouchableHighlight, StyleSheet, View, Image } from "react-native";
import React from "react";

export default(props:any)=>{
    return(
        <View style={styles.out}>
            <View style={styles.In}>
                <Text style={styles.ProgressText}>10%</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    out:{
        backgroundColor:'white',
        width:300,
        height:50,
        borderRadius:14
    },
    In:{
        backgroundColor:'#3EA2FF',
        width:100,
        height:50,
        borderRadius:14,
        textAlign:'center',
        justifyContent:'center'
    },
    ProgressText:{
        color: 'rgba(0, 0, 12, 0.74)',
       fontFamily:'Inter',
       fontSize:20,
       fontWeight:'bold',
       marginLeft:10
    }    
})