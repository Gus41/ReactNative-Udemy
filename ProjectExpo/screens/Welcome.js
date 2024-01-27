import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, TouchableNativeFeedbackBase, TouchableWithoutFeedback, View } from 'react-native';


export default ()=>{

    const [registerScreen,setRegisterScreen] = useState(false)
    return(
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/drop.png')}/>
                <Text style={styles.textTittle}>Bem vindo ao DrinkWater</Text>
            </View>
            <View style={styles.centerContain}>
                <Text style={styles.text}>Vamos precisas de algumas informações suas para continuar nossa experiencia</Text>
                <TouchableNativeFeedbackBase
                onPress={()=> setRegisterScreen(true)}>
                    <View  style={styles.button}>
                        <Text style={styles.text}>Continuar</Text>
                    </View>
                </TouchableNativeFeedbackBase>
            </View>
            
            <StatusBar style="auto" />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000018',
      alignItems: 'center',
      flexDirection:'column',
    },
    text:{
      color:"#30D3F6",
      textAlign:'center'
    },
    textTittle:{
        color:"#30D3F6",
        margin:10,
        fontWeight:'400',
        marginTop:50
    },
    logoContainer:{
        alignItems:'center',
        marginTop:60,
    },
    logo:{
      width:60,
      height:70
    },
    centerContain:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        marginBottom:100
    },
    button:{
        borderWidth:1,
        borderColor:'#30D3F6',
        width:200,
        padding:10,
        marginTop:100,
        borderRadius:100
        
    }
  });