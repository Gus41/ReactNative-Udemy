import React  from "react";
import { Button, Text, View } from "react-native";
import styles from "../../styles";

export default (props:any)=>{


    return(
        <View style={styles.Display}>
            <Text style={styles.DisplayText}>{props.num}</Text>
        </View>
    )

}