import { View,Text, Avatar, Input, Box} from "native-base";
import React, { useState } from "react";
import { AnimatableNumericValue } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default (props:any) =>{
    return(
        <SafeAreaView>
            <Avatar bg="blue" alignSelf={'center'} size={'xl'}>
                AJ
            </Avatar>
            <Text fontSize={'xl'} textAlign={'center'}>Anderson J</Text>
            <Box borderTopColor={'black'} borderTopWidth={0.2} pt={10} mt={5}>
                <Input placeholder="Alterar meta de agua" mx={'20'} onChangeText={(text)=>setGoal(Number(text))} />
                <Text textAlign={'center'}>Meta Atual: {`${goal}`}ml</Text>
            </Box>
        </SafeAreaView>
    )
}