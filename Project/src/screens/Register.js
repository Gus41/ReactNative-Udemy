import { Image, StyleSheet, Text, TouchableWithoutFeedback, View, TextInput } from 'react-native';

import { useState } from 'react';
import { saveData } from '../functions';
export default (props)=>{
    
    const [name,setName] = useState('')
    const [height,setHeight] = useState(null)
    const [weight,setWeight] = useState(null)
    const [boxes,setBoxes] = useState({one:false,two:false,three:false})

    const toggleBoxes = (id)=>{
        if(id == 1){
            setBoxes({one:true,two:false,three:false})
        }else if(id == 2){
            setBoxes({one:false,two:true,three:false})
        }else if(id == 3){
            setBoxes({one:false,two:false,three:true})
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.centerContain}>
                <View>
                    <Text style={styles.textLeft}>Qual o seu nome?</Text>
                    <TextInput 
                        style={styles.input}
                        onChangeText={(text)=>setName(text)}
                    />
                </View>
                <View>
                    <Text style={styles.textLeft}>Qual a sua altura?</Text>
                    <TextInput 
                        style={styles.input}
                        keyboardType='numeric'
                        onChangeText={(text)=>setHeight(text)}
                    />
                </View>
                <View>
                    <Text style={styles.textLeft}>Qual o seu peso?</Text>
                    <TextInput 
                        style={styles.input}
                        keyboardType='numeric'
                        onChangeText={(text)=>setWeight(text)}
                    />
                </View>
                <View style={styles.boxes}>
                    <TouchableWithoutFeedback 
                    onPress={()=> toggleBoxes(1)}>
                        <View style={[styles.box,boxes.one? styles.boxAble : false]}>
                        </View>
                    </TouchableWithoutFeedback>
                    <Text style={[styles.text,{marginTop:5}]}>Masc</Text>
                    <TouchableWithoutFeedback 
                        onPress={()=> toggleBoxes(2)}
                    >
                        <View style={[styles.box,boxes.two? styles.boxAble : false]}>
                        </View>
                    </TouchableWithoutFeedback>
                    <Text style={[styles.text,{marginTop:5}]}>Fem</Text>
                    <TouchableWithoutFeedback
                        onPress={()=> toggleBoxes(3)}
                    >
                    <View style={[styles.box,boxes.three? styles.boxAble : false]}>
                    </View>
                    </TouchableWithoutFeedback>
                    <Text style={[styles.text,{marginTop:5}]}>N/I</Text>
                </View>
                <TouchableWithoutFeedback 
                onPress={()=>{
                    saveData({name,height,weight,sex:boxes.one?'M':boxes.two?'F':'N/I'})
                    props.navigation.navigate("Initial")
                    }}>
                    <View style={styles.button}>
                        <Text style={styles.text}>Continuar</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
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
    textLeft:{
      color:"#30D3F6",
      textAlign:'left'
    },
    textTittle:{
        color:"#30D3F6",
        margin:10,
        fontWeight:'400',
        marginTop:100
    },
    logoContainer:{
        alignItems:'center',
        marginTop:60,
        flex:1
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

    },
    button:{
        borderWidth:1,
        borderColor:'#30D3F6',
        width:200,
        padding:10,
        borderRadius:100,
        marginTop:50
    },
    input:{
        borderWidth:1,
        borderColor:'#30D3F6',
        color:'#30D3F6',
        width:270,
        marginTop:5,
        borderRadius:7,
        padding:3,
        marginBottom:10
    },
    box:{
        backgroundColor:'gray',
        height:14,
        width:14,
        borderRadius:10,
        margin:10
    },
    boxes:{
        width:270,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    boxAble:{
        backgroundColor:'#30D3F6',
        height:14,
        width:14,
        borderRadius:10,
        margin:10
    }
  });