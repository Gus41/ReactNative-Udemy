import React, { useState } from "react";
import { Text, View, StyleSheet, Touchable, TouchableWithoutFeedback, TouchableOpacity, Image } from "react-native";
import { getGoal, getUserData } from "../functions";
import Drinks from "../components/Drinks";
import { getDrinkValues } from "../functions";
export default props=>{
  const [showDrinks,setShowDrinks] = useState(false)
  const toggle = ()=>{
    setShowDrinks(!showDrinks)
  }
  return(
        <View style={styles.container}>
           <View style={styles.logoContainer}>
              <Image style={styles.logo} source={require('../../assets/drop.png')}/> 
              <Text style={styles.text}>Meta: {getGoal()} ml</Text>
           </View>
           <View>

           </View>
           <Drinks drinkValues={getDrinkValues()} toggle={toggle} show={showDrinks} />
           <TouchableOpacity style={styles.button}
           onPress={toggle}>
              <Text style={{color:"white",textAlign:'center'}}>+</Text>
           </TouchableOpacity>
           <Text style={styles.textBottom}>Seja sua melhor versão</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000018',
      alignItems: 'center',
      flexDirection:'column',
    },
    text:{
      color:"#30D3F6",
      textAlign:'center',
      fontSize:15
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
  });