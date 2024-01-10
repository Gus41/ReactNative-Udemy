import React, { useState }  from "react";
import { FlatList, Text, TextInput, View } from "react-native";

export default(props:any)=>{
    const [name,setName] = useState('Teste')
    return(
        <>
            <TextInput
                placeholder="Digite seu nome"
                value={name}
                onChangeText={txt=>{setName(txt)}}
            />
        </>
    )
}