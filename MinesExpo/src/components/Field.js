import React from "react";
import params from "../params";
import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";
import Mine from "./Mine";
import Flag from "./Flag";

export default (props)=>{
    
    const {mined , opened, nearMines, exploded, flagged} = props

    //mined = Field está minado
    //opened = Field aberto
    //Nearmines = Quantas minas arredor desse field

    const styleField = [styles.field]
    if(opened){
        styleField.push(styles.opened)
    }
    if(exploded){
        styleField.push(styles.exploded)
    }
    if(flagged){
        styleField.push(styles.flagged, styles.regular)

    }
    if(styleField.length === 1){
        styleField.push(styles.regular)
    }


    let color = null
    if(nearMines > 0){
        if(nearMines === 1){
            color = '#2A2807'
        }else if(nearMines === 2){
            color = '#2B520F'
        }else if(nearMines > 2 && nearMines < 6 ){
            color = '#F9060A'
        }else{
            color = '#F221A9'
        }
    }

    return(
        <TouchableWithoutFeedback
        onPress={props.onOpen}
        onLongPress={props.onLongPress}
        >
            <View style={styleField}>
                {!mined && opened && nearMines > 0 ? 
                <Text style={[styles.label,{color:color}]}>
                    {nearMines}
                </Text>: false}
                {mined && opened ? <Mine/> : false}
                {flagged && !opened? <Flag/> : false}
            </View>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    field:{
        height:params.blockSize,
        width:params.blockSize,
        borderWidth:params.borderSize

    },
    regular:{
        backgroundColor:'#999',
        borderLeftColor:'#CCC',
        borderTopColor:'#CCC',
        borderRightColor:'#333',
        borderBottomColor:'#333'
    },
    opened:{
        backgroundColor:'#999',
        borderColor:'#777',
        alignItems:'center',
        justifyContent:'center'
    },
    label:{
        fontWeight:'bold',
        fontSize:params.fontSize
    },
    exploded:{
        backgroundColor:'red',
        borderColor:'red'
    },
    flagged:{

    }
})