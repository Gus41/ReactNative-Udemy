import React  from "react";
import { Button, Text, View } from "react-native";

export default (props:any)=>{

    function randomNumber(min:number,max:number){
        const delta = max - min + 1
        return Number((Math.random() * delta) + min)
    }
    return(
        <Button title="Press"
        onPress={()=>{
           const n =(randomNumber(props.min, props.max))

           props.func(n)
        }}
        />
    )
}