import React, { useContext } from "react";
import { View , Text, FlatList, StyleSheet} from "react-native";
import users from "../data/users";
import { ListItem } from "@rneui/base";
import UserCard from "../components/UserCard";
import UsersContext from "../context/UsersContext";

export default(props)=>{
    const {state } = useContext(UsersContext)
    return(
        <View style={styles.container}>
            <FlatList
            data={state.users}
            renderItem={item=><UserCard user={item.item} {...props} email={item.item.email} url={item.item.avatarUrl} id={item.item.id} name={item.item.name}/>}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        alignItems:'center'
    }
})