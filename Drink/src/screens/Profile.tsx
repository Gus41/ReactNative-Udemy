import { View,Text, Avatar, Input, Box} from "native-base";
import React, { useContext, useState } from "react";
import { AnimatableNumericValue } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserContext } from "../contexts/UserContext";

export default (props:any) =>{
    const { goal , setGoal, user} = useContext(UserContext)
    
    return(
        <SafeAreaView>
            <Avatar bg="blue" alignSelf={'center'} size={'xl'}>
                AJ
            </Avatar>
            <Text fontSize={'xl'} textAlign={'center'}>{`${user.name}`}</Text>
            <Box borderTopColor={'black'} borderTopWidth={0.2} pt={10} mt={5}>
                <Input placeholder="Alterar meta de agua" mx={'20'} onChangeText={(text)=>setGoal(Number(text))} />
                <Text textAlign={'center'}>Meta Atual: {`${goal}`}ml</Text>
            </Box>
        </SafeAreaView>
    )
}