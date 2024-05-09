import React, { useState } from "react";
import { Text, View, StyleSheet, Touchable, TouchableWithoutFeedback, TouchableOpacity, Image, Modal } from "react-native";
import EditDrink from "../components/EditDrink";
import DrinkRepository from "../../database/providers/DrinkProvider";


const drinkRepository = new DrinkRepository()
/*

Não pegar os valores de drink por parametro
mas chamar o drinkRepository AQUI

*/
export default class Edit extends React.Component {

    constructor(props){
        super(props)
    }

    state = {
        drinks:[{id:0,value:500},{id:0,value:1000},{id:0,value:1500},{id:0,value:2000}],
        showEditDrink: false,
        drinkSelecioned:0,
        drinkId:0,
    }
    selectDrink = (id)=>{
       let drinkSelecioned = this.state.drinks[id]
       let drinkId = id
       let showEditDrink = !this.state.showEditDrink
       this.setState({
        drinkId,drinkSelecioned,showEditDrink
       })
    }
    componentDidMount = ()=>{
        let drinks = []
        for(let i = 0 ; i < 4 ; i ++){
            drinks.push(this.props.route.params[i])
        }
        console.log("------------------")
        console.log(drinks)
        this.setState({drinks})
    }
    updateDrink = async(id,newValue)=>{
        let drinks = [...this.state.drinks]
        drinks[id] = {id:id, value:newValue}
        console.log(drinks)
        this.setState({drinks})

        //verificar se o id já existe no banco
        const idAlredyExists = await drinkRepository.getById(id)
        console.log(idAlredyExists)
        if(idAlredyExists.length > 0){
            //se existir update
            await drinkRepository.update(id,newValue)
        }else{
        //se não, insert
            await drinkRepository.create({id:id,value:newValue})
        }

    }
    render(){
       
        return(
            <View style={styles.container}>
               <View style={styles.logoContainer}>
                  <Image style={styles.logo} source={require('../../assets/drop.png')}/> 
               </View>
               <Text style={styles.text}>
                {this.state.showEditDrink?'Insira o novo valor para o elemento':'Selecione o elemento que deseja editar o valor'}
               </Text>
               <EditDrink save={this.updateDrink} id={this.state.drinkId}  show={this.state.showEditDrink} toggle={()=>this.setState({showEditDrink:false})} drinkValue = {this.state.drinkSelecioned.value} />
               <View style={styles.drinks}>
                        <TouchableOpacity style={styles.drink}
                            onPress={()=> this.selectDrink(0)}
                        >
                            <Image source={require('../../assets/drinkOne.png')} />
                            <Text style={styles.text}>{this.state.drinks[0].value} ml</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.drink} 
                            onPress={()=> this.selectDrink(1)}
                        >
                            <Image source={require('../../assets/drinkTwo.png')} />
                            <Text style={styles.text}>{this.state.drinks[1].value} ml</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.drink}
                            onPress={()=> this.selectDrink(2)}>
                            <Image source={require('../../assets/drinkOne.png')} />
                            <Text style={styles.text}>{this.state.drinks[2].value} ml</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.drink}
                            onPress={()=> this.selectDrink(3)}
                        >
                            <Image source={require('../../assets/drinkOne.png')} />
                            <Text style={styles.text}>{this.state.drinks[3].value} ml</Text>
                        </TouchableOpacity>
                </View>
               
               <Text style={styles.textBottom}>Seja sua melhor versão</Text>
            </View>
        )
    }
    
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