import { SafeAreaView, Text, View } from "react-native";
import styles from "./src/styles";
import Button from "./src/components/Button";
import Display from "./src/components/Display";
import { useState } from "react";

export default function App(){

  const [DisplayValue,setDisplayValue] = useState('0')
  const [ClearDisp,setClearDisp] = useState(false)
  const [Operation,ChangeOperation] = useState(null)
  const [values,setValues] = useState([0,0])
  const [indiceValue,setIndiceValue] = useState(0)

  const addDigit = (d:any)=>{
    if( !(d=='.' && DisplayValue.includes('.')) ){
    
      const ClearDisplay = DisplayValue === '0' || ClearDisp

     
      const Value = ClearDisplay? '' : DisplayValue
     
      if(d ==='.' && DisplayValue === '0'){
        return
      }
      const displayValue = Value  + d 
      setDisplayValue(displayValue)
    }
    
    if(d!=='.'){
      const newValue = parseFloat(DisplayValue)
      const Newvalues = [...values]
      Newvalues[indiceValue] = newValue
      setValues(Newvalues)
    }
    if(ClearDisp){
      setClearDisp(false)
    }
  }
  const clearDisplay = ()=>{
    setDisplayValue('0')
    setIndiceValue(0)
    setValues([0,0])
    setClearDisp(false)
    ChangeOperation(null)

  }
  const setOperation = (op:any)=>{
    if(indiceValue === 0){
      ChangeOperation(op)
      setIndiceValue(1)
      setClearDisp(true)
    }else{
      const isEquals = op ==='='
      const valuesClone = [...values]
      try{
        valuesClone[0] = eval(`${values[0]} ${Operation} ${values[1]}`)
      }catch(e){
        valuesClone[0] = values [0]
      }

      values[1] = 0
      setDisplayValue(`${valuesClone[0]}`)
      ChangeOperation(isEquals?null:op)
      setIndiceValue(isEquals?0:1)
      setClearDisp(!isEquals)
      setValues(valuesClone)
    }

  }
  return(
    <SafeAreaView style={styles.sectionContainer}>
      <Display value={DisplayValue} />
      <View style={styles.Buttons}>
        <Button
        label={'AC'}
        tripple 
        onClick={clearDisplay}
        />
         <Button
        label={'/'}
        operator
        onClick={()=> setOperation('/')}
        />
         <Button
        label={'7'}
        onClick = {()=> addDigit('7')}
        />
         <Button
        label={'8'}
        onClick = {()=> addDigit('8')}
        />
         <Button
        label={'9'}
        onClick = {()=> addDigit('9')}
        />
         <Button
        label={'*'}
        operator
        onClick={()=>setOperation('*')}
        />
        <Button
        label={'4'}
        onClick = {()=> addDigit('4')}
        />
        <Button
        label={'5'}
        onClick = {()=> addDigit('5')}
        />
        <Button
        label={'6'}
        onClick = {()=> addDigit('6')}
        />
        <Button
        label={'-'}
        operator
        onClick={()=>setOperation('-')}
        />
        <Button
        label={'1'}
        onClick = {()=> addDigit('1')}
        />
        <Button
        label={'2'}
        onClick = {()=> addDigit('2')}
        />
        <Button
        label={'3'}
        onClick = {()=> addDigit('3')}
        />
        <Button
        label={'+'}
        operator
        onClick = {()=> setOperation('+')}
        />
        <Button
        label={'0'}
        onClick = {()=> addDigit('0')}
        />
        <Button
        label={'.'}
        onClick = {()=> addDigit('.')}
        />
        <Button
        label={'='}
        operator
        doubble
        equals
        onClick = {()=>setOperation('=')}
        />
      </View>
    </SafeAreaView>
  )
}