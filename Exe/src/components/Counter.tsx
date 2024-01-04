import React, { useState }  from "react";
import { Button, Text, View } from "react-native";
import styles from "../styles";


export default ()=>{
    const [cont,setCont] = useState(0)
    return(
        <View>
            <Text style={styles.sectionTitle}>Contador: {cont}</Text>
            <Button 
            title="+"
            onPress={()=>{
                setCont(cont+1)
            }}
            />
            <Button 
            title="-"
            onPress={()=>{
                setCont(cont-1)
            }}
            />
        </View>
    )
}