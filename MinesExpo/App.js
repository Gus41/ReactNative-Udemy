import { Component } from "react";
import { Alert, SafeAreaView, StyleSheet, View } from "react-native";
import params from "./src/params";
import Field from "./src/components/Field";
import Flag from "./src/components/Flag";
import MineField from "./src/components/MineField";
import {
  cloneBoard, ShowMines, createMinedBoard, isBoardExploded, wonGame, openField, invertFlag
} from "./src/functions";
import Header from "./src/components/Header";


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
    const board = cloneBoard(this.state.board)
    openField(board,row,col)
    const lost = isBoardExploded(board)
    const won = wonGame(board)

    if(lost){
      ShowMines(board)
      Alert.alert("PERDEU",'burro')
    }else if(won){
      Alert.alert('PArabens',"Voce venceu")
    }
    this.setState({board,won,lost})
  }
  onLongPress = (row,col)=>{
    
    const board = cloneBoard(this.state.board)
    invertFlag(board,row,col)
    const won = wonGame(board)
    if(won){
      Alert.alert("Ganhou","parabens")
    }
    this.setState({board,won})
  }
  render(){
    return(
      <SafeAreaView>
        <Header />
        <View style={styles.board}>
          <MineField board={this.state.board} 
          openField={this.openField}
          onLongPress={this.onLongPress}
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