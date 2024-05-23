import { Image, StyleSheet, Platform, Text, View, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';

export default function HomeScreen() {
  const [hours,setHours] = useState(0)
  function pointer(hour: Date){
    console.log(hour)
  }
  return (
    <View style={styles.container}>
      
      <Text style={styles.titleContainer}>Seu Saldo de horas: {hours}</Text>


      
      <Text>Ou, insirá manualmente</Text>
      <TextInput keyboardType='number-pad' style={styles.input}
       />
       <Text>Exemplo: 08:10</Text>

       <View style={styles.footer}>
       <TouchableOpacity
        onPress={()=>pointer(new Date())}
       >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Bater Ponto</Text>
        </View>
      </TouchableOpacity>
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  footer:{
    backgroundColor:"purple",
    width:'100%',
    position:'absolute',
    bottom:0,
    padding:10,
    display:'flex',
    justifyContent:'center',
    alignItems:"center"
  },
  buttonText:{
    color:"white"
  },
  button:{
    backgroundColor:'purple',
    padding:10,
    width:200,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
    color:'white',
    borderRadius:10,
    margin:30,
    borderColor:'white',
    borderWidth:1
  },
  input:{
    borderWidth:1,
    width:200,
    margin:10,
    borderRadius:10
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',

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
