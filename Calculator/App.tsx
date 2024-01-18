import { SafeAreaView, Text, View } from "react-native";
import styles from "./src/styles";
import Button from "./src/components/Button";
import Display from "./src/components/Display";
import { useState } from "react";

export default function App(){



  //STATES
  const [DisplayValue,setDisplayValue] = useState('0')
  const [ClearDisp,setClearDisp] = useState(false)
  const [Operation,ChangeOperation] = useState(null)
  const [values,setValues] = useState([0,0])
  const [indiceValue,setIndiceValue] = useState(0)




  //ADICIONAR DIGITO
  const addDigit = (d:any)=>{
    //verificaçãp para não colocar dois pontos seguidos
   
    if( !(d=='.' && DisplayValue.includes('.')) ){
      
      //verificando se o display deverá ser limpo
      const ClearDisplay = DisplayValue === '0' || ClearDisp

     //Se o Display precisar ser limpo, o Value será vazio
      let Value = ClearDisplay? '' : DisplayValue
     
      if(d ==='.' && DisplayValue === '0'){
        Value = '0'
      }
      const displayValue = Value  + d 
      
      setDisplayValue(displayValue)
    }
    //Setando o value atual como float para não dar erro de tipagem float com inteiro
    if(d!=='.'){
      const newValue = parseFloat(DisplayValue)
      const Newvalues = [...values]
      Newvalues[indiceValue] = newValue
      setValues(Newvalues)
      console.debug(DisplayValue)
    }
    
  }

  //CLEAR NO DIPLAY E VOLTANDO TODOSO OS ESTADOS PARA OS VALORES INICIAIS
  const clearDisplay = ()=>{
    setDisplayValue('0')
    setIndiceValue(0)
    setValues([0,0])
    setClearDisp(false)
    ChangeOperation(null)

  }


  //SETAR OPERAÇÃO
  const setOperation = (op:any)=>{
    console.debug(op)
    // Se a operação for setada e o usuario ainda tiver digitado APENAS o primeiro valor
    //Exemplo : Usuario digitou ' 2 + '
    if(indiceValue === 0){
      ChangeOperation(op) // setando a operação
      setIndiceValue(1) // setando o indice pra o proximo valor
      setClearDisp(true) // Quando o usuario for digitar o proximo valor, o diplay será limpo antes
    }else{
      //INDICE !== 0 
     
      const isEquals = op ==='='
      const valuesClone = [...values]
      try{
        valuesClone[0] = eval(`${values[0]} ${Operation} ${values[1]}`)
      }catch(e){
        valuesClone[0] = values[0]
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