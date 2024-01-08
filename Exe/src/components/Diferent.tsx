import React, { useState }  from "react";
import { Button, Platform, Text, View } from "react-native";
import styles from "../styles";

export default()=>{
    if(Platform.OS === 'android'){
        return(
            <Text style={styles.sectionTitle}>Android</Text>
        )
    }else if(Platform.OS === 'ios'){
        return(
            <Text style={styles.sectionTitle}>IOS</Text>
        )
    }else{
        return(
            <Text style={styles.sectionTitle}>Vish</Text>
        )
    }
}