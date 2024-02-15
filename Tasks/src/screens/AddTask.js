import React from "react";
import { Component } from "react";
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import commomStyles from "../commomStyles";

const initialState = { desc : '' }
export default class AddTask extends Component{
    state = {
        ...initialState
    }
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
                    <TextInput  style={styles.input} 
                    placeholder="Informe a task"
                    onChangeText={desc=> this.setState({desc})}
                    value={this.state.desc}
                    
                    />
                    <View style={styles.buttons}>
                        <TouchableOpacity onPress={this.props.onCancel}>
                            <Text style={styles.button}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.button}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
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

    },
    header:{
        fontFamily: commomStyles.fontFamily,
        backgroundColor:commomStyles.color.todayColor,
        color:"white",
        textAlign:"center",
        padding:10,
        fontSize:18
    },
    buttons:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    input:{
        height:40,
        margin:15,
        fontFamily:commomStyles.fontFamily,
        backgroundColor:'white',
        borderWidth:1,
        borderColor:'#E3E3E3',
        borderRadius:5
    },
    button:{
        margin:20,
        marginRight:30,
        color:commomStyles.color.todayColor
    }
})