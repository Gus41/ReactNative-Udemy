import React  from "react";
import { Text, View } from "react-native";
import styles from "../styles";

export default (params: any)=>{
   const delta = params.max - params.min + 1
    return(
        <View>
            <Text>O valor {params.max} é maior que o valor {params.min}</Text>
            <View>
                <Text>Valor aleatorio: {parseInt(Math.random() * delta + params.min)}</Text>
            </View>
        
        </View>
    )
}