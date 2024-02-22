import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext, useState, useSyncExternalStore } from "react";
import { Text, View, StyleSheet, Touchable, TouchableWithoutFeedback, TouchableOpacity, Image, FlatList } from "react-native";
import Drop from "../components/Drop";
import DayContext from "../../context/DayContext";

export default props=>{
    const { state, dispatch } = useContext(DayContext)
    const [firstRead,setFirstRead] = useState(false)
    function convertData (values){
        if(firstRead){
            return
        }
        let objects = []
        for(let i = 0 ; i < values.length ; i ++){
            objects.push({
                id:i+1,
                amount:values[i]
            })
        }
        setFirstRead(true)
        return objects
    }
    console.log("-------------------------")
    let historic = state._j.historic
    let arr_hist = []
    arr_hist = historic.map(e=>{
        let data = {
            amount:e,
            id:arr_hist.length + 1
        }
        arr_hist.push(data)
    })
    console.log("=================")
    console.log(arr_hist)
    const [data,setData] = useState(historic)

    const DeleteValue = (id)=>{
        let dataClone = []
        for(let i = 0; i < data.length ; i ++){
            if(data[i].id != id){
                dataClone.push(data[i])
            }
        }
        //console.log("DATACLONE::::")
       // console.log(dataClone)
        dispatch({
            type:'delete',
            payload:dataClone
        })
        setData(dataClone)
    }
    return(
        <View style={styles.container}>
           <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../../assets/drop.png')}/> 
                <Text style={styles.textTittle}>Histórico do dia</Text>
                <View style={styles.drinkContainer}>
                    <FlatList
                    data={data}
                    renderItem={(item)=>{
                        return(
                            <Drop  amount={item.item.amount} id={item.item.id}  delete={DeleteValue}/>
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