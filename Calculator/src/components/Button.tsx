import { Text, Dimensions,TouchableHighlight, StyleSheet } from "react-native";

export default (props:any)=>{
    return(
        <TouchableHighlight onPress={props.onClick}>
            <Text style={style.button}>{props.label}</Text>
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
    }
})