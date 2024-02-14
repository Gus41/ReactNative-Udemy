import React from "react"
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native"
import commomStyles from "../commomStyles"
import moment from "moment"
import 'moment/locale/pt-br'

export default (props)=>{

    const doneOrNotStyle = props.doneAt != null ?
    {
        textDecorationLine : "line-through"    } : 
    {

    }
    const date = props.doneAt ?  
    moment(props.doneAt).locale('pt-br').format('ddd , D [de] MMMM')
    : 
    moment(props.estimateAt).locale('pt-br').format('ddd , D [de] MMMM')

    return(
        <View style={styles.container}>
            <TouchableWithoutFeedback 
            onPress={() => props.toggleTask(props.id)}>
                <View style={styles.checkContainer}>
                    {getCheckView(props.doneAt)}
                </View>
            </TouchableWithoutFeedback>
            
            <View >
                <Text style={[styles.desc, doneOrNotStyle]}>{props.desc}</Text>
                <Text style={styles.date}>{date + ""}</Text>
            </View>
        </View>
    )
}
function getCheckView(doneAt){
    if(doneAt !== null){
        return(
            <View style={styles.done}>
                
            </View>
        )
    }
    return(
        <View style={styles.pending}>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        borderColor:'#AAA',
        borderBottomWidth:1,
        alignItems:"center",
        paddingVertical:10
    },
    checkContainer:{
        width:'20%',
        alignItems:"center",
        justifyContent:"center"
    },
    pending:{
        height:25,
        width:25,
        borderRadius:13,
        borderWidth:1,
        borderColor:'#555'
    },
    done:{
        height:25,
        width:25,
        borderRadius:13,
        borderWidth:1,
        borderColor:'#555',
        backgroundColor:"#4D7031",
        justifyContent:"center"
    },
    desc:{
        fontFamily:commomStyles.fontFamily,
        color:commomStyles.color.mainText,
        fontSize:15,        
    },
    date:{
        fontFamily:commomStyles.fontFamily,
        color:commomStyles.color.subText,
        fontSize:12
    }
})