import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { MMKV } from 'react-native-mmkv';

const storage = new MMKV({})

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TextInput 
      style={styles.input}
      placeholder='Name'/>
      <TextInput 
      style={styles.input}
      placeholder='Email'/>
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={{color:"white",textAlign:'center',fontWeight:'bold'}}>Salvar</Text>
        </View>
      </TouchableOpacity>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderWidth:1,
    padding:10,
    width:300,
    margin:5,
    borderRadius:10
  },
  button:{
    backgroundColor:"#68da3e",
    padding:10,
    width:300,
    borderRadius:10,

  }
});
