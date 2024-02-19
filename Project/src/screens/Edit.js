import React, { useState } from "react";
import { Text, View, StyleSheet, Touchable, TouchableWithoutFeedback, TouchableOpacity, Image, Modal } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import EditDrink from "../components/EditDrink";
import Drinks from "../components/Drinks";
import { saveDrinkValues } from "../functions";


export default (props)=>{
    const [drinks,setDrinks] = useState([500,1000,1500,2000])

    const updateDrinks = async ()=>{
      try{
        let drinksDB = await AsyncStorage.getItem("Drinks")
        drinksDB = JSON.parse(drinksDB)
        setDrinks(drinksDB)
      }catch(e){
        console.log(e)
      }
    }
    updateDrinks()
    const [ShowEditDrink,setShowEditDrink] = useState(false)
    const [DrinkSelecioned, setDrinkSelecioned] = useState(0)
    const [drinkId,setDrinkId] = useState(0)
    const selectDrink = (id)=>{
        let drink = drinks[id]
        setDrinkSelecioned(drink)
        setDrinkId(id)        
        setShowEditDrink(!ShowEditDrink)
    }


    const NewValue = (id,value) =>{
        let drinksClone = [...drinks]
        drinksClone[id] = parseInt(value)
        setDrinks(drinksClone)
        saveDrinkValues(drinksClone)
        updateDrinks()
    }
    return(
        <View style={styles.container}>
           <View style={styles.logoContainer}>
              <Image style={styles.logo} source={require('../../assets/drop.png')}/> 
           </View>
           <Text style={styles.text}>
            {ShowEditDrink?'Insira o novo valor para o elemento':'Selecione o elemento que deseja editar o valor'}
           </Text>
           <EditDrink save={NewValue} id={drinkId}  show={ShowEditDrink} toggle={()=>setShowEditDrink(!ShowEditDrink)} drinkValue = {DrinkSelecioned} />
           <View style={styles.drinks}>
                    <TouchableOpacity style={styles.drink}
                        onPress={()=> selectDrink(0)}
                    >
                        <Image source={require('../../assets/drinkOne.png')} />
                        <Text style={styles.text}>{drinks[0]} ml</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.drink} 
                        onPress={()=> selectDrink(1)}
                    >
                        <Image source={require('../../assets/drinkTwo.png')} />
                        <Text style={styles.text}>{drinks[1]} ml</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.drink}
                        onPress={()=> selectDrink(2)}>
                        <Image source={require('../../assets/drinkOne.png')} />
                        <Text style={styles.text}>{drinks[2]} ml</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.drink}
                        onPress={()=> selectDrink(3)}
                    >
                        <Image source={require('../../assets/drinkOne.png')} />
                        <Text style={styles.text}>{drinks[3]} ml</Text>
                    </TouchableOpacity>
            </View>
           
           <Text style={styles.textBottom}>Seja sua melhor versão</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    exit:{
        backgroundColor:'transparent',
        flex:1
    },
    drink:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        padding:15
    },
    drinks:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:30,
        paddingVertical:60,
        marginTop:60,
        borderWidth:1,
        borderColor:'#30D3F6',
        paddingHorizontal:10
    },
    header:{
        justifyContent:'space-between',
        alignItems:"center",
        flexDirection:'row',
        padding:10
    },
    modal:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: '#000018',
        margin:30,
        paddingVertical:60,
        marginTop:60,
        borderWidth:1,
        borderColor:'#30D3F6',
        paddingHorizontal:10
    },
    container:{
        backgroundColor: '#000018',
        flex:1,
        alignItems:'center'
    },
    text:{
        color:"#30D3F6",
        textAlign:'center',
        fontSize:15,
        marginTop:30
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
          marginTop:100,
      },
      logo:{
        width:60,
        height:70,
        marginBottom:10
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
          width:60,
          height:60,
          borderRadius:30,
          justifyContent:"center",
          alignItems:'center',
          position:"absolute",
          bottom:70
      },
      textBottom:{
        position:"absolute",
        bottom:20,
        color:"#30D3F6",
        textAlign:'center',
  
    }
})