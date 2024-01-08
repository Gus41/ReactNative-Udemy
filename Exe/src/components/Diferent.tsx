import React, { useState }  from "react";
import { Button, Platform, Text, View } from "react-native";
import styles from "../styles";

export default()=>{
   return(
    <Text style={styles.sectionTitle}>{Platform.OS}</Text>
   )
}