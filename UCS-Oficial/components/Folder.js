import { StyleSheet, View, Text, TouchableHighlight } from "react-native"

export default (props)=>{
    if(props.text == 'Identidade Estudantil'){
        return(
            <TouchableHighlight onPress={props.toggle} style={style.container}>
                <Text style={style.text}>{props.text}</Text>
            </TouchableHighlight>
        )
    }
    return(
        <View style={style.container}>
            <Text style={style.text}>{props.text}</Text>
        </View>
    )
}
const style = StyleSheet.create({
    container:{
        backgroundColor:"#1c3f77",
        padding:5,
        width:100,
        height:100,
        borderRadius:12,
        marginBottom:20,
        justifyContent:'flex-end'
    },
    text:{
        color:'white',
        textAlign:'center',
        fontSize:12
    }
})