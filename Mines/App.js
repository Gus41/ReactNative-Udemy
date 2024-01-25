import { Component } from "react";
import { Alert, SafeAreaView, StyleSheet, View } from "react-native";
import params from "./src/params";
import Field from "./src/components/Field";
import Flag from "./src/components/Flag";
import MineField from "./src/components/MineField";
import {
  cloneBoard, ShowMines, createMinedBoard, isBoardExploded, wonGame } from "./src/functions";


export default class App extends Component{
  constructor(props){
    super(props)
    this.state = this.createState()
  }
  MinesAmount = ()=>{
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.dificultLevel)
  }
  createState = ()=>{
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return {
      board : createMinedBoard(rows,cols,this.MinesAmount()),
      won : false,
      lost: false
    
    }
  }
  openField =(row,col)=>{
    Alert.alert('click')
  }

  render(){
    return(
      <SafeAreaView>
        <View style={styles.board}>
          <MineField board={this.state.board} 
          openField={this.openField}
          />
        </View>
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'flex-end'
  },
  board:{
    alignItems:'center',
    backgroundColor:'#AAA'
  }
})