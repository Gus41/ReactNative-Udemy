import React from "react";
import { View,Text, TouchableHighlight } from "react-native";
import UserRepository from "../database/UserRepositoy";

export default class Visualize extends React.Component{

    delete = async (id:number)=>{
        console.log("Deletar elemento com id: " + id)
        const rowsAffected = await  UserRepository.delete(id)
        console.log("Linhas afetadas: " + rowsAffected)
        
    }

    render(): React.ReactNode {
        return(
            <View>
                <Text>Visualização</Text>
                <TouchableHighlight onPress={()=>this.delete(1)}>
                    <Text>Remover Um</Text>
                </TouchableHighlight>
            </View>
        )
    }
}