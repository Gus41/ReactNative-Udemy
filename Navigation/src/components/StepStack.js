import React from "react";
import { Button, SafeAreaView, Text, View } from "react-native";


export default(props)=>{
    return(
        <View style={{flex:1}}>
            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                {props.next?
                <Button 
                    title="Proxima"
                    onPress={()=>props.navigation.navigate(props.next)}
                />
                :false
                }
                {props.back?
                <Button 
                    title="back"
                    onPress={()=>props.navigation.goBack()}
                />
                :false
                }
            </View>
            <View style={{flex:1}}> 
            {props.children}
            </View>
        </View>
    )
}