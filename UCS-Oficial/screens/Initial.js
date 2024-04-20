import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Modal, SafeAreaView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Folder from '../components/Folder';

export default function Initial() {
    const [showIdentity,setShowIdentidy] = useState(false)
    return (
      <SafeAreaView style={styles.container}>
        <Modal transparent={true} visible={showIdentity}>
            <View style={styles.back}>
                <TouchableHighlight onPress={()=> setShowIdentidy(false)}>
                    <Text style={styles.textBack}>Voltar</Text>
                </TouchableHighlight>
                <View style={styles.identity}>
                    <Text>Identidade Estudantil</Text>
                </View>
            </View>
        </Modal>
        <Folder  text="Estude na Ucs"/>
        <Folder text="text"/>
        <Folder toggle={()=>setShowIdentidy(!showIdentity)} text="Identidade Estudantil"/>
        <Folder text="text"/>
        <Folder text="text"/>
        <Folder text="text" />
        <Folder text="text"/>
        <Folder text="text"/>
        <Folder text="text"/>

      </SafeAreaView>
  );
}
//#1c3f77
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#061123',
    padding:20,
    justifyContent:'space-around',
    flexWrap:'wrap',
    alignItems:'center',
    flexDirection:'row'
  },
  text:{
    color:"white"
  },
  back:{
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    backgroundColor:'#061123',
    flex:1
  },
  identity:{
    backgroundColor:"red",
    margin:20,
    borderRadius:20,
    width:340,
    height:600,
    padding:10,
    
  },
  textBack:{
    color:'white',
    
  }
});
