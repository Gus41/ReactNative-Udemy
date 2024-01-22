import { Component } from "react";
import { SafeAreaView } from "react-native";
import params from "./src/params";
import Field from "./src/components/Field";
import Flag from "./src/components/Flag";
export default class App extends Component{
  render(){
    return(
      <SafeAreaView>
        <Field mined/>
        <Field opened nearMines = {3}/>
        <Field/>
        <Field opened nearMines = {1}/>
        <Field opened nearMines = {2}/>
        <Field opened nearMines = {5}/>
        <Field mined opened/>
        <Field mined opened exploded />
        <Field flagged/>

      </SafeAreaView>
    )
  }
}