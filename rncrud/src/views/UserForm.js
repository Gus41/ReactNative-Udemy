import React, { useContext, useState } from "react";
import { TouchableWithoutFeedback } from "react-native";
import { View, Text, TextInput, StyleSheet, TouchableNativeFeedbackBase, TouchableHighlightComponent} from "react-native";
import UsersContext from "../context/UsersContext";


export default(props)=>{
    const [user,setUser] = useState(props.route.params?props.route.params : {})
    const { dispatch } = useContext(UsersContext)
    return(
        <View style={styles.form}>
            <Text>Name:</Text>
            <TextInput 
            onChangeText={name=> setUser({...user, name})}
            value={user.name}
            style={styles.input}
            />
            <Text>Email:</Text>
            <TextInput 
            onChangeText={email=> setUser({...user, email})}
            value={user.email}
            style={styles.input}
            />
            <Text>URL do avatar:</Text>
            <TextInput 
            onChangeText={avatarUrl=> setUser({...user, avatarUrl})}
            value={user.avatarUrl}
            style={styles.input}
            />
            <TouchableWithoutFeedback
            onPress={()=>{
                dispatch({
                    type: user.id? 'updateUser' : 'createUser',
                    payload: user
                })
                props.navigation.goBack()
            }}
            >
                <View>
                    <Text>Salvar</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}
const styles = StyleSheet.create({
    input:{
        height:40,
        borderColor:'gray',
        borderWidth:1,
        marginBottom:5
    },
    form:{
        padding:10
    }
})