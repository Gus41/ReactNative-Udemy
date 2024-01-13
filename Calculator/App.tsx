import { SafeAreaView, Text, View } from "react-native";
import styles from "./src/styles";
import Button from "./src/components/Button";
import Display from "./src/components/Display";
import { useState } from "react";

export default function App(){
  const [DisplayValue,setDisplayValue] = useState('0')


  const addDigit = (d:string)=>{
    setDisplayValue(d)
  }
  const clearDisplay = ()=>{
    setDisplayValue('0')
  }
  const setOperation = (op:any)=>{

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
        />
      </View>
    </SafeAreaView>
  )
}