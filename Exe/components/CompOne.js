import { StatusBar } from 'expo-status-bar';
import { Alert, Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function CompOne(){
    return(
        <View>
            <Text style={{
                color:'#93CBFF'
            }}>Componente um</Text>
            <Button
            title='Opa'
            onPress={()=>{
                Alert.alert('Opa')
            }}
            />
        </View>
    )
}