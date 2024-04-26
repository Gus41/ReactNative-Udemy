import React, { useState } from "react"
import { FlatList, View,Text, StyleSheet, TouchableHighlight } from "react-native"
import UserRepository, { User } from "../database/UserRepositoy"

const userRepository = new UserRepository()
export default class Home extends React.Component {
   
    state = {
        users:[],
        dataMocked:{name:"Teste",age:10},
        sum:0
    }

    create = async ()=>{
        const id = this.state.users.length + 1
        const user:User = {...this.state.dataMocked, id:id}
        const data = await userRepository.create(user)
        console.log(data)
        await this.all()
    }
    all = async()=>{
        const users = await userRepository.all()
        //console.log(users)
        let sum = 0;
        users.map(e=>{
            sum += e.age
        })
        this.setState({users,sum})
    }
    async componentDidMount(): Promise<void> {
        await this.all()
    }

    render(): React.ReactNode {
        return(
            <View style={styles.container}>
                <Text>Soma de age: {this.state.sum}</Text>
                <Text style={styles.text}>Usuários</Text>
                {this.state.users.map(u=>{
                    return(
                        <Text key={u.id} style={styles.text}>{u.name}</Text>
                    )
                })}
                <TouchableHighlight style={styles.button} onPress={()=> this.create()}>
                    <Text style={styles.textwhite}>Incrementar</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button} onPress={()=> this.props.navigation.navigate('visualize')}>
                    <Text style={styles.textwhite}>Visualizar</Text>
                </TouchableHighlight>
            </View>
        )
    }
   
}
const styles = StyleSheet.create({
    text:{
        color:"black"
    },
    button:{
        backgroundColor:"gray",
        padding:10,
        margin:10,
        borderRadius:10,
        textAlign:'center',
    },
    textwhite:{
        color:'white'
    },
    container:{
        flex:1,
        alignItems:'center',
        paddingTop:20
    }
})