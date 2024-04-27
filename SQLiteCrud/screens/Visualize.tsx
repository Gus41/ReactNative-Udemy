import React from "react";
import { View,Text, TouchableHighlight, StyleSheet } from "react-native";
import UserRepository from "../database/UserRepositoy";

const userRepository = new UserRepository()
export default class Visualize extends React.Component{

    state = {
        data: []
    }

    delete = async (id:number)=>{
        console.log("Deletar elemento com id: " + id)
        const rowsAffected = await  UserRepository.delete(id)
        console.log("Linhas afetadas: " + rowsAffected)
        await this.all()
        
    }
    all = async ()=>{
        const data = await userRepository.all()
        this.setState({data})
    }
    async componentDidMount(){
        await this.all()
    }

    async componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any) {
        await this.all()
    }
    render(): React.ReactNode {
        return(
            <View style={style.contaienr}>
                <Text>Visualização</Text>
                {this.state.data.map(e=>{
                    return( 
                        <View key={e.id} style={style.card}>
                            <Text>{e.name}</Text>
                            <TouchableHighlight onPress={()=>this.delete(e.id)}>
                                <Text>Apagar</Text>
                            </TouchableHighlight>
                        </View>
                    )
                })}
            </View>
        )
    }
}
const style = StyleSheet.create({
    contaienr:{
        justifyContent:'center'
    },
    card:{
        justifyContent:"space-around",
        alignItems:'center',
        flexDirection:"row",
        margin:10,
        borderBottomColor:'black',
        borderBottomWidth:1
    }
})