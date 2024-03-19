import React, { Component, useContext, useState, useSyncExternalStore } from "react";
import { Text, View, StyleSheet, Touchable, TouchableWithoutFeedback, TouchableOpacity, Image, FlatList } from "react-native";
import Drop from "../components/Drop";

export default class Historic extends Component{
    del = (id)=>{
        let newData = []
        for(let i = 0 ; i < this.state.data.length ; i++){
            if(this.state.data[i].id != id){
                newData.push(this.state.data[i])
            }
        }
        this.setState({data:newData})
        this.props.route.params.delete(id)
    }
    treatData = (data_arr)=>{
        let data = []
        for(let i = 0; i< data_arr.length ; i ++){
            data.push({
                id:i,
                amount:data_arr[i]
            })
        }
        return data
    }
    state = {
        data:[...this.treatData(this.props.route.params.historic)]
    }
    componentDidMount = ()=>{
        this.setState({
            data:[...this.treatData(this.props.route.params.historic)]
        })
    }
    render = ()=>{
        console.log("HISTORIC")
        console.log(this.props.route.params)
        console.log("HISTORIC")
        return(
            <View style={styles.container}>
               <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../../assets/drop.png')}/> 
                    <Text style={styles.textTittle}>Histórico do dia</Text>
                    <View style={styles.drinkContainer}>
                        <FlatList
                        data={this.state.data}
                        renderItem={(item)=>{
                            return(
                                <Drop  amount={item.item.amount} id={item.item.id}  delete={this.del}/>
                            )
                        }}
                        />
                    </View>
                </View>
            </View>
        )
    }
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