import React, { useContext, useState , useEffect} from "react";
import { Text, View, StyleSheet, Touchable, TouchableWithoutFeedback, TouchableOpacity, Image, Modal } from "react-native";
import Drinks from "../components/Drinks";
import { AppContext } from "../contexts/AppContext";


function goInitial(){
  console.log('go initial')
}


export default (props)=>{
  const {user,atualDay,setAtualDay,drinks} = useContext(AppContext)  
  const [showDrinks,setShowDrinks] = useState(false)
  const [showHistoric,setShowHistoric] = useState(false)
  const goEdit = ()=>{
    props.navigation.navigate("Drinks")
  }
  const toggle = ()=>{
    setShowDrinks(!showDrinks)
  }
  const Add = (value)=>{
    let historic = atualDay.historic
    historic.push({amount:value,id:historic.length})
    const atualDayCopy = {
      amount: atualDay.amount + value,
      date : atualDay.date,
      historic : historic
    }
    setAtualDay(atualDayCopy)
  }
  toggleHistoric = ()=>{
    setShowHistoric(!showHistoric)
  }
  deleteLast = ()=>{
    if(atualDay.amount <= 0){
      return
    }
    const a = atualDay
    a.amount -= a.historic[a.historic.length-1].amount
    a.historic.pop()
    console.log(a)
    setAtualDay(a)
  }
  return(
      <View style={styles.container}>
          
           <View style={styles.logoContainer}>
              <Image style={styles.logo} source={require('../../assets/drop.png')}/> 
              <Text style={styles.text}>Meta: {`${user.goal}`} ml</Text>
           </View>
           <View>
            <Text style={styles.text}>{atualDay.amount}</Text>
           </View>
           
           <Drinks deleteLast={deleteLast} Add={Add} goInitial={goInitial} goEdit={goEdit} drinkValues={drinks} toggle={toggle} show={showDrinks} />
           <TouchableOpacity style={styles.button}
           onPress={toggle}>
              <Text style={{color:"white",textAlign:'center'}}>+</Text>
           </TouchableOpacity>
           <Text style={styles.textBottom}>Seja sua melhor versão</Text>
        </View>
    )
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