import { Text, Dimensions,TouchableHighlight, StyleSheet } from "react-native";

export default (props)=>{
    const ButtonStyles = [style.button]
    if(props.doubble){
        ButtonStyles.push(style.ButtonDoubble)
    }
    if(props.tripple){
        ButtonStyles.push(style.ButtonTripple)
    }
    if(props.operator){
        ButtonStyles.push(style.OpperatorButton)
    }
    if(props.equals){
        ButtonStyles.push(style.ButtonEquals)
    }
    return(
        <TouchableHighlight onPress={props.onClick}>
            <Text style={ButtonStyles}>{props.label}</Text>
        </TouchableHighlight>
    )
}

const style = StyleSheet.create({
    button:{
        fontSize:40,
        height: Dimensions.get('window').width/4, // 4 btns por linha
        width: Dimensions.get('window').width/4,
        padding:20,
        backgroundColor:'#f0f0f0',
        textAlign:'center',
        borderWidth:1,
        borderColor:'#888'
    },
    OpperatorButton:{
        color:'white',
        backgroundColor:'#fa8231'
    },
    ButtonDoubble:{
        width: (Dimensions.get('window').width/4) * 2,
    },
    ButtonTripple:{
        width: (Dimensions.get('window').width/4) * 3  
    },
    ButtonEquals:{
        backgroundColor:'white',
        color:"black"
    }
})