import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    App:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:20,
        backgroundColor:'gray',
        color:'white'
    },
    sectionContainer: {
     alignContent:"center",
     alignItems:'center'
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color:'white',
      textAlign:'center'
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color:'white',
      textAlign:'center',
      
    },
    highlight: {
      fontWeight: '700',
    },
    btn:{
      margin:10
    },
    Display:{
      backgroundColor:'white',
      borderRadius:5,
      margin:5,
      padding:5,
      width:200
    },
    DisplayText:{
      fontSize: 18,
      fontWeight: '400',
      color:'black',
      textAlign:'center'
    },
    Buttons:{
      flexDirection:'row',
      alignContent:'center',
      alignItems:'center'
    },
    box:{
      height:40,
      width:40,
      backgroundColor:'#387373',
      margin:5
    },
    txtInp:{
      backgroundColor:'white',
      borderRadius:10,
      textAlign:'center',
      borderWidth:0,
      fontSize: 18,
      color:'black'
    }
  });
export default styles