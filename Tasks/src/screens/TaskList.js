import { FlatList, ImageBackground, StyleSheet, Text, View } from "react-native"
import React from "react"
import { Component } from "react"
import todayImage from '../../assets/imgs/today.jpg'
import moment from "moment"
import "moment/locale/pt-br"
import commomStyles from "../commomStyles"
import Task from "../components/Task"

export default class TaskList extends Component{

    state = {
        tasks:[
            {
                id:Math.random(),
                desc:"Comprar Livro",
                estimateAt: new Date(),
                doneAt: new Date()
            },
            {
                id:Math.random(),
                desc:"Ler Livro",
                estimateAt: new Date(),
                doneAt: null
            }
        ]
    }
    toggleTask = (id)=>{
        const tasks = [...this.state.tasks]
        tasks.forEach(t=>{
            if(t.id == id){
                t.doneAt = t.doneAt? null : new Date()
            }
        })

        this.setState( {tasks} )
    }
    render(){
        const today = moment().locale('pt-br').format('ddd,D [de] MMMM')
        return(
            <View style={styles.container}>
                <ImageBackground
                style={styles.background} 
                source={todayImage}>
                    <View style={styles.tittleBar}>
                        <Text style={styles.tittle}>Hoje</Text>
                        <Text style={styles.subTittle}>{today}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskContainer}>
                    <FlatList data={this.state.tasks} 
                        keyExtractor={item=>`${item.id}`}
                        renderItem={({item})=><Task {...item} toggleTask={this.toggleTask}/>}
                    />
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
    },
    subTittle:{
        fontFamily:commomStyles.fontFamily,
        color:commomStyles.color.secondary,
        fontSize:20,
        marginLeft:20,
        marginBottom:30
    }
})