import React from "react";
import { StyleSheet, View } from "react-native";
import Field from "./Field";


export default (props) =>{
    const rows = props.board.map((row,r_indice)=>{
        const columns = row.map((field,c_indice)=>{
            return(
                <Field {...field} key={c_indice}
                onOpen={()=>props.openField(r_indice,c_indice)}
                />
            )
        })
        return(
            <View style={{flexDirection:'row'}} key={r_indice}>
                {columns}
            </View>
        )
    })
    return(
        <View style={styles.container}>
            {rows}
        </View>
    )
    
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#EEE'
    }
})