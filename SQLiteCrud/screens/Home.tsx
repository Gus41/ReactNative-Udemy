import { useState } from "react"
import { FlatList, View,Text, StyleSheet, TouchableHighlight } from "react-native"
import UserRepository from "../database/UserRepositoy"

const userRepository = new UserRepository()
export default ()=>{
    const [users,setUsers] = useState([])
    const user = {id:1,name:"Gustavo",age:2}

    const create = async (user)=>{

        const id = await userRepository.create(user)
        console.log(id)
        await all()
    }
    const all = async()=>{
        const alldata = await userRepository.all()
        console.log(alldata)
        setUsers(alldata)
    }
    return(
        <View>
            <Text style={styles.text}>Usuários</Text>
            {users.map(u=>{
                return(
                    <Text>{u.name}</Text>
                )
            })}
            <TouchableHighlight onPress={()=>create(user)}>
                <Text>Incrementar</Text>
            </TouchableHighlight>
        </View>
    )
}
const styles = StyleSheet.create({
    text:{
        color:"black"
    }
})