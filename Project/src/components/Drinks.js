import React from "react";
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default (props)=>{
    const drinks = props.drinkValues
    console.log(drinks)
    return(
        <Modal animationType="slide" transparent={true} visible={!props.show} style={styles.modal}>
            <View style={styles.container} >
                <View style={styles.header}>
                    <TouchableOpacity>
                        <View>
                            <Image source={require('../../assets/gear.png')} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>props.toggle()}>
                        <Text style={styles.text}>X</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.drinks}>
                    <TouchableOpacity style={styles.drink}>
                        <Image source={require('../../assets/drinkOne.png')} />
                        <Text style={styles.text}>500ml</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.drink}>
                        <Image source={require('../../assets/drinkTwo.png')} />
                        <Text style={styles.text}>1.000ml</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.drink}>
                        <Image source={require('../../assets/drinkOne.png')} />
                        <Text style={styles.text}>500ml</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.drink}>
                        <Image source={require('../../assets/drinkOne.png')} />
                        <Text style={styles.text}></Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
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