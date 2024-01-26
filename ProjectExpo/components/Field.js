import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';

export default (props)=>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{props.text}</Text>
            <TextInput 
            style={styles.input}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
     margin:10,
    },
    text:{
      color:"#30D3F6",
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
        
    },
    input:{
        borderWidth:1,
        borderColor:'#30D3F6',
        color:'#30D3F6',
        width:270,
        marginTop:5,
        borderRadius:7,
        padding:3
    }
});