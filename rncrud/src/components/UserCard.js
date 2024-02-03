import { Image, View , Text, StyleSheet, TouchableWithoutFeedback, Alert, TouchableHighlight} from "react-native"

export default (props)=>{
    function confirmUserDelete(user){
        Alert.alert('Excluir usuário?','Essa ação não poderá ser desfeita',[
            {
                text:'Sim',
                onPress(){
                    props.dispatch({
                        type: 'deleteUser',
                        payload: user
                    })
                }
            },
            {
                text:'Não'
            }
        ])
    }
    function getAction(user){
        return (
            <>
                <TouchableWithoutFeedback
                onPress={()=>props.navigation.navigate('UserForm',user)}
                >
                    <View style={{width:20,height:20,backgroundColor:'orange'}}>

                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                onPress={()=>confirmUserDelete(user)}
                >
                    <View style={{width:20,height:20,backgroundColor:'red'}}>

                    </View>
                </TouchableWithoutFeedback>
            </>
        )
    }
    const user = props.user
    return(
        <TouchableWithoutFeedback
        onPress={()=>props.navigation.navigate("UserForm",user)}
        >
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
                {getAction(props.user)}
            </View>
        </View>
        </TouchableWithoutFeedback>
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