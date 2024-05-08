import React from "react";
import { Image, Modal, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { useState } from "react";
import IDrinks from "../interfaces/IDrinks";

export default (props:any)=>{
    const Dr : IDrinks = {data:[]}
    let drinks = []
    for(let i = 0 ; i < Dr.data.length ; i++ ){
        drinks.push(Dr.data[i].value)
    }
    return(
        <Modal animationType="slide" transparent={true} visible={props.show} style={styles.modal}>
            <TouchableWithoutFeedback
            onPress={()=> props.toggle()}>
            <View style={styles.exit}></View>
            </TouchableWithoutFeedback>
            <View style={styles.container} >
                <View style={styles.header}>
                    <TouchableOpacity onPress={()=>props.goEdit()}>
                        <View>
                            <Image source={require('../../assets/gear.png')} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>props.deleteLast()}>
                        <Text style={styles.text}>Desfazer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>props.toggle()}>
                    <View>
                            <Image source={require('../../assets/gear.png')} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.drinks}>
                    <TouchableOpacity style={styles.drink}
                        onPress={()=>props.Add(drinks[0])}
                    >
                        <Image source={require('../../assets/drinkOne.png')} />
                        <Text style={styles.text}>{drinks[0]} ml</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.drink}
                        onPress={()=>props.Add(drinks[1])}

                    >
                        <Image source={require('../../assets/drinkTwo.png')} />
                        <Text style={styles.text}>{drinks[1]} ml</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.drink}
                        onPress={()=>props.Add(drinks[2])}
                    >
                        <Image source={require('../../assets/drinkOne.png')} />
                        <Text style={styles.text}>{drinks[2]} ml</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.drink}
                        onPress={()=>props.Add(drinks[3])}
                    >
                        <Image source={require('../../assets/drinkOne.png')} />
                        <Text style={styles.text}>{drinks[3]} ml</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    exit:{
        backgroundColor:'rgba(0,0,0,0.5)',
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
        padding:10,
        marginBottom:20
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
        height:250
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
})