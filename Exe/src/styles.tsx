import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    App:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:20,
        backgroundColor:'black',
        color:'white'
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
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
      color:'white'
    },
    highlight: {
      fontWeight: '700',
    },
    btn:{
      margin:10
    }
  });
export default styles