import React from "react";
import { Component } from "react";
import { Modal, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import commomStyles from "../commomStyles";


export default class AddTask extends Component{

    render(){
        return(
            <Modal transparent={true} visible={this.props.isVisible}
            onRequestClose={this.props.onCancel} animationType="slide">
                <TouchableWithoutFeedback 
                onPress={this.props.onCancel}>
                    <View style={styles.background}>           
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.container}>
                    <Text style={styles.header}>Nova Task</Text>
                </View>
                <TouchableWithoutFeedback 
                onPress={this.props.onCancel}>
                    <View style={styles.background}>           
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
}
const styles = StyleSheet.create({
    background:{
        flex:1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    container:{
        backgroundColor:"white",
        flex:1,

    },
    header:{
        fontFamily: commomStyles.fontFamily,
        backgroundColor:commomStyles.color.todayColor,
        color:"white",
        textAlign:"center",
        padding:10,
        fontSize:18
    }
})