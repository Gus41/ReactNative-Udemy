import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useSyncExternalStore } from "react";
import { Text, View, StyleSheet, Touchable, TouchableWithoutFeedback, TouchableOpacity, Image, FlatList } from "react-native";
import Drop from "../components/Drop";

async function getAtualDay(){
    const data = await AsyncStorage.getItem("AtualDay")
    return JSON.parse(data)
}
export default props=>{
    const [data,setData] = useState([{date:new Date(),id:1,amount:1500},{date:new Date(),id:2,amount:1000},{date:new Date(),id:3,amount:1500},{date:new Date(),id:4,amount:1000}])

    const DeleteValue = (id)=>{
        let dataClone = []
        for(let i = 0; i < data.length ; i ++){
            if(data[i].id != id){
                dataClone.push(data[i])
            }
        }
        setData(dataClone)
    }
    return(
        <View style={styles.container}>
           <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../../assets/drop.png')}/> 
                <Text style={styles.textTittle}>Histórico do dia</Text>
                <View style={styles.drinkContainer}>
                    <FlatList data={data}
                    renderItem={item=>{
                        return(
                            <Drop delete={DeleteValue} id={item.item.id} amount={item.item.amount} />
                        )
                    }}
                    />
                </View>
            </View>


        </View>
    )
}
const styles = StyleSheet.create({
    drinkContainer:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:'center'
    },
    container: {
      flex: 1,
      backgroundColor: '#000018',
      alignItems: 'center',
      flexDirection:'column',
    },
    text:{
      color:"#30D3F6",
      textAlign:'center'
    },
    textTittle:{
        color:"#30D3F6",
        margin:10,
        fontWeight:'500',
        marginTop:50,
        fontSize:20
    },
    logoContainer:{
        alignItems:'center',
        marginTop:50,
    },
    logo:{
      width:60,
      height:70
    },
    centerContain:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        marginBottom:100
    },
    button:{
        borderWidth:1,
        borderColor:'#30D3F6',
        width:200,
        padding:10,
        marginTop:200,
        borderRadius:100
        
    }
  });