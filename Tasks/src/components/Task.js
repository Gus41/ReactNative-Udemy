import React from "react"
import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from "react-native"
import commomStyles from "../commomStyles"
import moment from "moment"
import 'moment/locale/pt-br'
import { Swipeable, GestureHandlerRootView } from "react-native-gesture-handler"
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
    const getRgthContent = ()=>{
        return(
            <TouchableOpacity style={styles.rigth}
            onPress={()=> props.onDelete(props.id)}
            >
                <View>
                    <Text style={{color:'white'}}>Exluir</Text>
                </View>
            </TouchableOpacity>
        )
    }
    const getLeftContent = ()=>{
        return(
            <View style={styles.left}>
                <Text style={styles.excludeText}>Exluir</Text>
            </View>
        )
    }
    return(
        <GestureHandlerRootView>
            <Swipeable 
            renderLeftActions={getLeftContent}
            renderRightActions={getRgthContent}
            onSwipeableOpen={()=> props.onDelete(props.id)}
            >
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
            </Swipeable>
        </GestureHandlerRootView>
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
        paddingVertical:10,
        backgroundColor:"white"
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
    },
    rigth:{
        backgroundColor:"red",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:'flex-end',
        padding:10
    },
    left:{
        backgroundColor:"red",
        flexDirection:'row',
        justifyContent:'flex-start',
        flex:1
    },
    excludeText:{
        fontFamily: commomStyles.fontFamily,
        color:"white",
        margin:10
    }
})