import { Component } from "react"
import { SafeAreaView, View } from "react-native"
import Display from "./src/components/Display"
import styles from "./src/styles"
import Button from "./src/components/Button"


const initialState = {
  DisplayValue:'0',
  CleatDisplay:false,
  Operation:null,
  Values:[0,0],
  Courrent:0
}

export default class App extends Component{
  
  state = {...initialState}

  clearDisplay = ()=>{
    this.setState({...initialState})
  }

  setOperation = (op:any) =>{

  }

  addDigit = (digit : any)=>{
    if(digit === '.' && this.state.DisplayValue.includes('.')){
      return
    }
    let Value

    if(this.state.CleatDisplay || this.state.DisplayValue === '0' && digit !=='.' && digit !=='0'){
      Value = ''
    }else{
      Value = this.state.DisplayValue
    }
    const DisplayValue = Value + digit
    this.setState({DisplayValue})
    if(digit !== '.'){
      const FloatValues = [...this.state.Values]
      FloatValues[this.state.Courrent] = parseFloat(DisplayValue)
      const Values = FloatValues
      this.setState({Values})
    }

  }

  render(){
    return(
      <SafeAreaView style={styles.sectionContainer}>
      <Display value={this.state.DisplayValue} values = {this.state.Values} />
      <View style={styles.Buttons}>
        <Button
        label={'AC'}
        tripple 
        onClick={this.clearDisplay}
        />
         <Button
        label={'/'}
        operator
        onClick={()=> this.setOperation('/')}
        />
         <Button
        label={'7'}
        onClick = {()=> this.addDigit('7')}
        />
         <Button
        label={'8'}
        onClick = {()=> this.addDigit('8')}
        />
         <Button
        label={'9'}
        onClick = {()=> this.addDigit('9')}
        />
         <Button
        label={'*'}
        operator
        onClick={()=> this.setOperation('*')}
        />
        <Button
        label={'4'}
        onClick = {()=> this.addDigit('4')}
        />
        <Button
        label={'5'}
        onClick = {()=> this.addDigit('5')}
        />
        <Button
        label={'6'}
        onClick = {()=> this.addDigit('6')}
        />
        <Button
        label={'-'}
        operator
        onClick={()=> this.setOperation('-')}
        />
        <Button
        label={'1'}
        onClick = {()=> this.addDigit('1')}
        />
        <Button
        label={'2'}
        onClick = {()=> this.addDigit('2')}
        />
        <Button
        label={'3'}
        onClick = {()=> this.addDigit('3')}
        />
        <Button
        label={'+'}
        operator
        onClick = {()=> this.setOperation('+')}
        />
        <Button
        label={'0'}
        onClick = {()=> this.addDigit('0')}
        />
        <Button
        label={'.'}
        onClick = {()=> this.addDigit('.')}
        />
        <Button
        label={'='}
        operator
        doubble
        equals
        onClick = {()=> this.setOperation('=')}
        />
      </View>
    </SafeAreaView>
    )
  }
}