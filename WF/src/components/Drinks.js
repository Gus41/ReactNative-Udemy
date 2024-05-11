import React from "react";
import { Image, Modal, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import DrinkRepository from "../../database/providers/DrinkProvider";

const drinkRepository = new DrinkRepository()
export default class Drinks extends React.Component{
   
    constructor(props){
        super(props)
    }

    state = {
        drinks:[{id:0,value:500},{id:1,value:1000},{id:2,value:1500},{id:3,value:2000}],
    }
    componentDidMount = async()=>{
        const drinksUpdated = await drinkRepository.all()
        //console.log(drinksUpdated)
        if(drinksUpdated.length > 0){
            console.log("Atualizações encontradas")
            let drinks = [...this.state.drinks]
            //atualizar no state as bebidas que foram registradas no banco
            // pelo id
            drinksUpdated.map(d_updated=>{
                drinks.map((d,indice)=>{
                    if(d_updated.id == indice){
                        drinks[indice] = {id:indice,value:d_updated.value}
                    }
                })
            })
           // console.log(drinks)
            this.setState({drinks})
            console.log(this.state)
        }else{
            console.log("Nenhuma Atualização registrada")
        }    
    }
    render(){
        return(
            <Modal animationType="slide" transparent={true} visible={this.props.show} style={styles.modal}>
                <TouchableWithoutFeedback
                onPress={()=> this.props.toggle()}>
                <View style={styles.exit}></View>
                </TouchableWithoutFeedback>
                <View style={styles.container} >
                    <View style={styles.header}>
                        <TouchableOpacity onPress={()=>this.props.goEdit()}>
                            <View>
                                <Image source={require('../../assets/gear.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.deleteLast()}>
                            <Text style={styles.text}>Desfazer</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.toggle()}>
                        <View>
                                <Image source={require('../../assets/gear.png')} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.drinks}>
                        <TouchableOpacity key={this.state.drinks[0].id} style={styles.drink}
                            onPress={()=>props.Add(this.state.drinks[0].value)}
                        >
                            <Image source={require('../../assets/drinkOne.png')} />
                            <Text style={styles.text}>{this.state.drinks[0]} ml</Text>
                        </TouchableOpacity>
                        <TouchableOpacity key={this.state.drinks[1].id} style={styles.drink}
                            onPress={()=>props.Add(this.state.drinks[1].value)}
    
                        >
                            <Image source={require('../../assets/drinkTwo.png')} />
                            <Text style={styles.text}>{this.state.drinks[1].value} ml</Text>
                        </TouchableOpacity>
                        <TouchableOpacity key={this.state.drinks[2].id} style={styles.drink}
                            onPress={()=>props.Add(this.state.drinks[2].value)}
                        >
                            <Image source={require('../../assets/drinkOne.png')} />
                            <Text style={styles.text}>{this.state.drinks[2].value} ml</Text>
                        </TouchableOpacity>
                        <TouchableOpacity key={this.state.drinks[3].id} style={styles.drink}
                            onPress={()=>props.Add(this.state.drinks[3].value)}
                        >
                            <Image source={require('../../assets/drinkOne.png')} />
                            <Text style={styles.text}>{this.state.drinks[3].value} ml</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        )
    }
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