import React, { useState }  from "react";
import { Button, Text, View } from "react-native";
import styles from "../../styles";
import CounterDisplay from "./CounterDisplay";
import CounterButtons from "./CounterButtons";


export default (props:any)=>{
    const [num,setNum] = useState(0)
    function inc(){
        setNum(num+1)
    }
    function dec(){
        setNum(num-1)
    }
    return(
        <>
            <Text style={styles.sectionTitle}>Contador</Text>
            <CounterDisplay
            num = {num}
            />
            <CounterButtons
            inc={inc}
            dec={dec}
            />
        </>
    )

}