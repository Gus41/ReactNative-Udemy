import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';


export default (props)=>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{props.text}</Text>
            <View style={styles.boxes}>
                <TouchableWithoutFeedback>
                    <View style={styles.box}>
                    </View>
                </TouchableWithoutFeedback>
                <Text style={[styles.text,{marginTop:5}]}>Masc</Text>
                <TouchableWithoutFeedback>
                    <View style={styles.box}>
                    </View>
                </TouchableWithoutFeedback>
                <Text style={[styles.text,{marginTop:5}]}>Fem</Text>
                <TouchableWithoutFeedback>
                    <View style={styles.box}>
                    </View>
                </TouchableWithoutFeedback>
                <Text style={[styles.text,{marginTop:5}]}>N/B</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    text:{
        color:"#30D3F6",
        textAlign:'left'
    },
    container:{
        justifyContent:'flex-start'
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
    }
})