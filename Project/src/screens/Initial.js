import React, { useContext, useState } from "react";
import { Text, View, StyleSheet, Touchable, TouchableWithoutFeedback, TouchableOpacity, Image } from "react-native";
import { getGoal, getUserData } from "../functions";
import Drinks from "../components/Drinks";
import { getDrinkValues } from "../functions";



export default class Initial extends Component{
  render = ()=>{
    return(
      <View style={styles.container}>
          <TouchableOpacity 
            onPress={()=>props.navigation.navigate('Historic')}
          >
            <View style={
              {
                width:'100%',
                display:'flex',
                justifyContent:"flex-end",
                flexDirection:'row',
                padding:10
              }
            }>
              <Image source={require("../../assets/historic.png")} 
                style={styles.historic}            
              />
            </View>
          </TouchableOpacity>
           <View style={styles.logoContainer}>
              <Image style={styles.logo} source={require('../../assets/drop.png')}/> 
              <Text style={styles.text}>Meta: {getGoal()} ml</Text>
           </View>
           <View>
            <Text style={styles.text}>{atualDay}</Text>
           </View>
           <Drinks Add={Add} goInitial={goInitial} goEdit={goEdit} drinkValues={getDrinkValues()} toggle={toggle} show={showDrinks} />
           <TouchableOpacity style={styles.button}
           onPress={toggle}>
              <Text style={{color:"white",textAlign:'center'}}>+</Text>
           </TouchableOpacity>
           <Text style={styles.textBottom}>Seja sua melhor versão</Text>
        </View>
    )
  }
  
}
const styles = StyleSheet.create({
  historic:{
    marginTop:10,
    width:30,
    height:30
  },
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
      position:'relative'
  },
  logo:{
    width:60,
    height:70,
    marginBottom:10,
    position:"relative"
  },
  centerContain:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      padding:5,
      marginBottom:100,
      position:"relative"
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