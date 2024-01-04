import React  from "react";
import { Button, Text, View } from "react-native";
import styles from "../styles";

export default ()=>{
    return(
        <Button title="Press"
        onPress={()=>{
            console.warn('Botao executado')
        }}
        />
    )
}