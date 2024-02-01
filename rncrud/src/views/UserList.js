import React from "react";
import { View , Text, FlatList, StyleSheet} from "react-native";
import users from "../data/users";
import { ListItem } from "@rneui/base";
import UserCard from "../components/UserCard";

export default()=>{
    return(
        <View style={styles.container}>
            <FlatList
            data={users}
            renderItem={item=><UserCard email={item.item.email} url={item.item.avatarUrl} id={item.item.id} name={item.item.name}/>}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        alignItems:'center'
    }
})