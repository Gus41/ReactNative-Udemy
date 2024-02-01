import { Image, View , Text, StyleSheet} from "react-native"

export default (props)=>{

    return(
        <View style={styles.card}>
            <View style={styles.image}>
                <Image
                source={{uri:props.url + ''}}
                style={{width:60,height:60}}
                />
            </View>
            <View style={styles.content}>
                <Text style={styles.name}>
                    {props.name}
                </Text>
                <Text>
                    {props.email}
                </Text>
            </View>
            <View style={styles.idContainer}>
                <Text style={styles.id}>{props.id}</Text>
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    card:{
        backgroundColor:"#EEE",
        margin:10,
        width:350,
        borderRadius:10,
        justifyContent:'space-between',
        padding:10,
        flexDirection:'row',
        
    },
    image:{
        backgroundColor:'white',
        padding:4,
        borderRadius:100
    },
    name:{
        fontSize:15,
        fontWeight:'bold'
    },
    idContainer:{
        justifyContent:'flex-end'
    },
    id:{
        color:'red'
    },
    content:{
        justifyContent:"space-around",
        alignItems:"center"
    }
})