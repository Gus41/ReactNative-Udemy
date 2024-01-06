import React  from "react";
import { Button, Text, View } from "react-native";
import Son from "./Son";

export default ()=>{
    function Show(n:any){
        console.log(n)
    }
    return(
       <>
        <Son
        func = {Show}
        min ={10}
        max ={55}
        />
       </>
    )
}