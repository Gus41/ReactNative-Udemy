import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext, useState, useSyncExternalStore } from "react";
import { Text, View, StyleSheet, Touchable, TouchableWithoutFeedback, TouchableOpacity, Image, FlatList } from "react-native";
import Drop from "../components/Drop";
import DayContext from "../../context/DayContext";
import moment from "moment";
import 'moment/locale/pt-br'

async function updateDay(newHistoric){
    let values = []
    for(let i = 0 ; i < newHistoric.length ; i ++){
        values.push(newHistoric[i].amount)
    }
    const day = {
        day:moment().locale('pt-br').format("DD/MM"),
        historic:[...values],
        amount: 0
    }
    console.log("Objeto que será salvo para substituir o")
    console.log("AtualDay:")
    console.log(day)
    console.log("++++++++++++++++")
    try{
        await AsyncStorage.setItem("AtualDay",JSON.stringify(day))
    }catch(e){
        console.log(e)
    }
}


export default props=>{
    const { state, dispatch } = useContext(DayContext)
    
    console.log("-------------------------")
    let historic = state._j.historic
    let arr_hist = []
    historic.map(e=>{
        let data = {
            amount:e,
            id:arr_hist.length + 1
        }
        arr_hist.push(data)
    })
  
    const [data,setData] = useState(arr_hist)

    const DeleteValue = (id)=>{
        let dataClone = []
        for(let i = 0; i < data.length ; i ++){
            if(data[i].id != id){
                dataClone.push(data[i])
            }
        }
        //console.log("DATACLONE::::")
       // console.log(dataClone)
        
        setData(dataClone)
        updateDay(dataClone)
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