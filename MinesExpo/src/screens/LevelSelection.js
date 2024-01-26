import React from "react";
import { Modal, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";

export default (props)=>{
    return(
        <Modal onRequestClose={props.onCancel}
        visible={props.isVisible} animationType="slide"
        transparent={true}
        >
            <View style={styles.frame}>
                <View>
                    <Text style={styles.title}>Selecione o nivel</Text>
                </View>
                <TouchableOpacity style={[styles.button,styles.bgEasy]}
                onPress={()=> props.onLevelSelected(0.1)}
                >
                    <Text style={styles.buttonLabel}>Fácil</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button,styles.bgNormal]}
                onPress={()=> props.onLevelSelected(0.2)}
                >
                    <Text style={styles.buttonLabel}>Intermediario</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button,styles.bgHard]}
                onPress={()=> props.onLevelSelected(0.3)}
                >
                    <Text style={styles.buttonLabel}>Dificil</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    frame:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white'
    },
    container:{
        backgroundColor:'#EEE',
        alignItems:'center',
        justifyContent:"center",
        padding:15
    },
    title:{
        fontSize:30,
        fontWeight:'bold'
    },
    button:{
        marginTop:15,
        padding:8,
        width:250,
        borderRadius:10,
    },
    buttonLabel:{
        fontSize:20,
        color:'#EEE',
        fontWeight:'bold',
        textAlign:'center'
    },
    bgEasy:{
        backgroundColor:'green'
    },
    bgNormal:{
        backgroundColor:'blue'
    },
    bgHard:{
        backgroundColor:'red'
    }
})