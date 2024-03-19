import React from "react";
import { Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";




export default (props)=>{
    const [drink,setDrink] = useState(props.drinkValue)
    let img = '../../assets/drinkOne.png'
    const [newValue,setNewValue] = useState(0)
    return(
        <Modal animationType="slide" transparent={true} visible={props.show} style={styles.modal}>
            <TouchableWithoutFeedback
            onPress={()=> props.toggle()}>
            <View style={styles.exit}></View>
            </TouchableWithoutFeedback>
            <View style={styles.container} >
                <Text style={styles.text}>{props.drinkValue}</Text>
                <Image style={styles.image} source={require(img)} />
                <TextInput  style={styles.input} keyboardType="numeric" 
                    onChangeText={(text)=>setNewValue(Number(text))}
                />
                <TouchableOpacity
                    onPress={()=>{
                        if(newValue > 1){
                            props.save(props.id,newValue)
                            props.toggle()
                        }
                    }}
                >
                    <View style={styles.button}>
                        <Text style={styles.text}>Salvar</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    input:{
        borderWidth:1,
        borderColor:'#30D3F6',
        justifyContent:"center",
        alignItems:'center',
        padding:10,
        width:300,
        borderRadius:5,
        margin:20,
        color:"#30D3F6",
    },
    image:{
        width:70,
        marginTop:100
    },
    exit:{
        backgroundColor:'transparent',
        flex:1
    },
    drink:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    drinks:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:30
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
        flex:1
    },
    container:{
        backgroundColor: '#000018',
        borderTopWidth:1,
        borderColor:'white',
        position:'absolute',
        bottom:0,
        width:'100%',
        height:500,
        alignItems:'center'
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
          justifyContent:"center",
          alignItems:'center',
          padding:10,
          width:150,
          borderRadius:10
 
      },
      textBottom:{
        position:"absolute",
        bottom:20,
        color:"#30D3F6",
        textAlign:'center',
  
    }
})