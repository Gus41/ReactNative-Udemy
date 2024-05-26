import { Image, StyleSheet, Platform, View, Text, TextInput, TouchableHighlight } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen() {

  async function incrementAmount(t : time) {
    
    const amount = await AsyncStorage.getItem('amount')
    if(amount){
      const atualdata : time = JSON.parse(amount)
      atualdata.hour += t.hour
      atualdata.minutes += t.minutes 
      if(atualdata.minutes > 60){
        atualdata.minutes -= 60
        atualdata.hour += 1
      }
      await AsyncStorage.setItem('amount',JSON.stringify(atualdata))
    }else{
      AsyncStorage.setItem('amount',JSON.stringify(t))
    }
  }
  async function getHistoric(){

    const data = await AsyncStorage.getItem('historic')
    if(data){
      console.log(data)
      return JSON.parse(data)
    }
    return []
  }
  function alertUser(){
    console.log("Tem certeza blablabla")
  }
  async function save(t:time) {
    const data = await AsyncStorage.getItem('historic')
    if(!data){
      const newData = [t]
      await AsyncStorage.setItem('historic',JSON.stringify(newData))
    }else{
      const dataArray : Array<time> = JSON.parse(data)
      if(dataArray.length == 3){
        alertUser()
      }else{
        dataArray.push(t)
        await AsyncStorage.setItem('historic',JSON.stringify(dataArray))
        console.log("Primeiro cadastro")
      }
    }
  }

  type time = {
    hour:number,
    minutes:number
  }
  function convertDate(date:Date) : time{
    const hour = date.getHours()
    const minutes = date.getMinutes()

    return{hour,minutes}
  }

  function clock(date: Date){
    const atualHuor : time = convertDate(date)

    

    //incrementAmount(atualHuor)

  }

  const [show,setShow] = useState(true)
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.header}>
          <TouchableHighlight
            onPress={()=>setShow(!show)}
          >
            <View style={styles.secButton}>
              <Text style={styles.textButton}>{!show? 'Inserir Manualmente' : 'Inserir com Botão'}</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.body}>
          {
            show?
            <>
              <TextInput placeholder='Ex: 00:00' style={styles.input} />
              <TouchableHighlight>
                <View style={styles.button}>
                  <Text style={styles.textButton}>Enviar</Text>
                </View>
              </TouchableHighlight>
            </>
            :
            <>
              <TouchableHighlight
                onPress={()=>clock(new Date())}
              >
                <View style={styles.button}>
                  <Text style={styles.textButton}>Bater Ponto</Text>
                </View>
              </TouchableHighlight>
            </>
          }
        </View>
      </View>
      <StatusBar hidden={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  button:{
    backgroundColor:'#191919',
    padding:10,
    width:200,
    borderRadius:10,
    margin:12
  },
  textButton:{
    color:"white",
    textAlign:'center'
  },
  header:{
    marginBottom:20
  },
  body:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  input:{
    borderWidth:1,
    margin:10,
    padding:10,
    borderRadius:5,
    width:'90%'
  },
  secButton:{
    backgroundColor:'#191919',
    padding:10,
    borderRadius:5,
    width:170
  },
  container:{
    backgroundColor:"#1E1E1E",
    flex:1,
    padding:10,
    display:'flex',
    justifyContent:'center',
  },
  box:{
    backgroundColor:'#D9D9D9',
    margin:10,
    padding:5,
    position:'absolute',
    width:'100%',
    top:250,
    borderRadius:10
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
