import { View,Text, VStack, HStack, Button } from "native-base";
import React, { useState } from "react";
import { StyleSheet } from "react-native";

export default(props:any)=>{

    const [water,setWater] = useState(0)
    const [goal,setGoal] = useState(2000)

    const handleWater = ()=>{
        setWater(water+500)
    }
    return(
       <>
            <HStack alignItems='center' justifyContent='center'>
                <Text fontSize='6xl'>
                    {water}
                </Text>
                <Text fontSize='xl'>
                    {' '}/ {goal}
                </Text>
            </HStack>
            <Button 
            colorScheme='primary'
            onPress={handleWater}
            >
                Drink
            </Button>
        </>
    )
}
