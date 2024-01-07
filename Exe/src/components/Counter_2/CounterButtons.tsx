import React  from "react";
import { Button, Text, View } from "react-native";
import styles from "../../styles";

export default (props:any)=>{


    return(
        <View style={styles.Buttons}>
            <Button
            title="+"
            onPress={props.inc}
            />
            <Button
            title="-"
            onPress={props.dec}
            />
        </View>
    )

}