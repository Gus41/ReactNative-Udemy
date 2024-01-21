import { Component } from "react";
import { SafeAreaView } from "react-native";
import params from "./src/params";
import Field from "./src/components/Field";
export default class App extends Component{
  render(){
    return(
      <SafeAreaView>
        <Field/>
        <Field opened nearMines = {3}/>
        <Field/>
        <Field opened nearMines = {1}/>
        <Field opened nearMines = {2}/>
        <Field opened nearMines = {5}/>
      </SafeAreaView>
    )
  }
}