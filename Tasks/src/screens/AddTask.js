import React from "react";
import { Component } from "react";
import { Modal, Platform, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import commomStyles from "../commomStyles";
import DatePicker from "react-native-date-picker";
import moment from "moment";
const initialState = { desc : '', date: new Date(), showDatePicker : false}

export default class AddTask extends Component{
    state = {
        ...initialState
    }

    save = ()=>{
        const newTask = {
            desc: this.state.desc,
            date: this.state.date
        }
        if(this.props.onSave){
            this.props.onSave(newTask)
            this.setState({...initialState})
        }
    }

    getDateTimePicker = ()=>{
        let date = <View style={styles.datePicker}>
            <DatePicker value={this.state.date}
            date={this.state.date}
            onDateChange={date=>this.setState({date , showDatePicker: false})}
            />
        </View>
        const dateString = moment(this.state.date).format('ddd, D [de] MMMM [de] YYYY')
        if(Platform.OS === 'android'){
            date = (
                <View>
                    <TouchableOpacity 
                        onPress={()=> this.setState({showDatePicker: true})}
                    >
                        <Text style={styles.date}>
                            {dateString}
                        </Text>
                    </TouchableOpacity>
                    {this.state.showDatePicker && date}
                </View>
            )
        }
        return date
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
                    {this.getDateTimePicker()}
                    <View style={styles.buttons}>
                        <TouchableOpacity onPress={this.props.onCancel}>
                            <Text style={styles.button}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={this.save}>
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
        justifyContent:'space-between',
        marginTop:10
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
    },
    date:{
        textAlign:"center",
        fontFamily:commomStyles.fontFamily,
        fontSize:20
    },
    datePicker:{
        margin:"auto",
        textAlign:'center',
    }
})