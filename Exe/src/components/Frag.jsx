import React  from "react";
import { Text, View } from "react-native";
import styles from "../styles";

export default (props)=>{
    
    return(
        <React.Fragment>
            <Text style={styles.sectionTitle}>{props.tittle}</Text>
            <Text style={styles.sectionDescription}>{props.sec}</Text>
        </React.Fragment>
    )
}