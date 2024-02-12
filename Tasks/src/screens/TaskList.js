import { ImageBackground, StyleSheet, Text, View } from "react-native"
import React from "react"
import { Component } from "react"
import todayImage from '../../assets/imgs/today.jpg'
import moment from "moment"
import "moment/locale/pt-br"
import commomStyles from "../commomStyles"
export default class TaskList extends Component{
    render(){
        const today = moment().locale('pt-br').format('ddd,D [de] MMMM')
        return(
            <View style={styles.container}>
                <ImageBackground
                style={styles.background} 
                source={todayImage}>
                    <View style={styles.tittleBar}>
                        <Text style={styles.tittle}>Hoje</Text>
                        <Text>{today}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskContainer}>
                    <Text>Task List</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    background:{
        flex:3
    },
    taskContainer:{
        flex:7
    },
    tittleBar:{
        flex:1,
        justifyContent:'flex-end'
    },
    tittle:{
        fontFamily: commomStyles.fontFamily,
        fontSize:50,
        color: commomStyles.color.secondary,
        marginLeft:20,
        marginBottom:20
    }
})