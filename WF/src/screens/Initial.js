import React, { useContext, useState } from "react";
import { Text, View, StyleSheet, Touchable, TouchableWithoutFeedback, TouchableOpacity, Image } from "react-native";
import { Component } from "react";
import Drinks from "../components/Drinks";
import DrinkRepository from "../../database/providers/DrinkProvider";

function goInitial(){
  console.log('go initial')
}

const drinksRepository = new DrinkRepository()
const initialDrinks = [{
  id:0,
  value:500
},
{
  id:1,
  value:1000
},
{
  id:2,
  value:1500
},
{
  id:3,
  value:2000
}

]
export default class Initial extends Component{
  state = {
    showDrinks:false,
    drinks:[...initialDrinks]
  }

  goEdit = ()=>{
    this.props.navigation.navigate("edit")
  }
  getDrinkValues = async ()=>{
    const data = await drinksRepository.all()
    return [500,1000,1500,2000]
  }
  getGoal = ()=>{
    return 2000
  }
  toggle = ()=>{
    const showDrinks = !this.state.showDrinks
    this.setState({showDrinks})
  }
  componentDidMount = async()=>{
    // verificar se existe alguma alteração na tabela de drinks e atualizar o state
    const drinksUpdated = await drinksRepository.all()
    for(let i = 0 ; i < drinksUpdated.length ; i ++){
      this.state.drinks.map((d,d_index)=>{
        if(d_index == drinksUpdated[i].id){
          let drinks = this.state.drinks
          drinks[d_index].value = drinksUpdated[i].value
          this.setState({drinks})
        }
      })
    }
  }
  add = (value)=>{
    //criar um objeto do tipo day
    //adicionar ele ao historico

  }
  componentDidUpdate = async ()=>{
    const drinksUpdated = await drinksRepository.all()
    for(let i = 0 ; i < drinksUpdated.length ; i ++){
      this.state.drinks.map((d,d_index)=>{
        if(d_index == drinksUpdated[i].id){
          let drinks = this.state.drinks
          drinks[d_index].value = drinksUpdated[i].value
          this.setState({drinks})
        }
      })
    }
  }
  render = ()=>{
    return(
      <View style={styles.container}>

           <View style={styles.logoContainer}>
              <Image style={styles.logo} source={require('../../assets/drop.png')}/> 
              <Text style={styles.text}>Meta: {this.getGoal()} ml</Text>
           </View>
           <View>
            <Text style={styles.text}>{0}</Text>
           </View>
           <Drinks Add={()=>console.log("add")} goInitial={goInitial} goEdit={this.goEdit} toggle={this.toggle} show={this.state.showDrinks} />
           <TouchableOpacity style={styles.button}
           onPress={this.toggle}>
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