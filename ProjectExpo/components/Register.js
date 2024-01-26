import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import Field from './Field';
import Fields from './Fields';
import CheckBoxes from './CheckBoxes';

export default ()=>{
    return(
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/drop.png')}/>
                <Text style={styles.textTittle}>Bem vindo ao DrinkWater</Text>
            </View>
            <View style={styles.centerContain}>
                <Fields />
                <CheckBoxes  text='Qual seu sexo?' options={['Mas','Fem','N/B']}/>
                <TouchableWithoutFeedback>
                    <View style={styles.button}>
                        <Text style={styles.text}>Continuar</Text>
                    </View>
                </TouchableWithoutFeedback>
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
        marginBottom:200
    },
    button:{
        borderWidth:1,
        borderColor:'#30D3F6',
        width:200,
        padding:10,
        borderRadius:100,
        marginTop:50
    }
  });