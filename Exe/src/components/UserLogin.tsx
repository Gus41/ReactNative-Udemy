import React  from "react";
import { Text, View } from "react-native";
import styles from "../styles";
import RendCond from "./RendCond";

export default (props:any)=>{
    const user = props.user
    return(
        <RendCond test ={user && Object.keys(user).length !==0}>
            <Text style={styles.sectionTitle}>
                {user.name} - {user.email}
             </Text>
        </RendCond>
    )
}