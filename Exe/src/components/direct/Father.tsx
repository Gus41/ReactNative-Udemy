import React  from "react";
import { Text, View } from "react-native";
import styles from "../../styles";
import Son from "./Son";


export default (props : any)=>{
    const ti = 'Titulo Passado por Father'
    const Sub = 'Subtitulo Father'
    return(
       <>
        <Son tittle = {ti} sec ={Sub}/>
       </>
    )

}