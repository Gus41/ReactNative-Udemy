import { View,Text, VStack, HStack, Button, Box, SmallCloseIcon } from "native-base";
import React, { useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { useToast } from "native-base";
import { UserContext } from "../contexts/UserContext";



export default(props:any)=>{
    const [bottleSize,setBottleSize] = useState(500)
    const [water,setWater] = useState(0)
    const toast = useToast()

    const {goal} = useContext(UserContext)

    const handleWater = ()=>{
        setWater(water+bottleSize)
        toast.show({
            description:`Você bebeu ${bottleSize} ml de agua`
        })
    }


    useEffect(()=>{
        if(water>=goal){
            toast.show({
                description:'Meta atingida',
                placement:'top'
            })
        }
    },[water])

    const handleChangeBottleSize =(value:number)=>{
        setBottleSize(value)
    }
    return(
       <VStack p={4} alignItems={'center'} flex={1} width={'100%'} justifyContent={'space-between'}>
            <Text fontSize={'sm'}>
                copo de {bottleSize} ml
            </Text>

            <VStack>
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
            
            </VStack>

            <Box mt={10}>
                <Button.Group>
                    <Button onPress={()=>handleChangeBottleSize(200)} colorScheme='teal'>Copo Americano</Button>
                    <Button onPress={()=>handleChangeBottleSize(100)} colorScheme='teal'>Xícara</Button>
                    <Button onPress={()=>handleChangeBottleSize(500)} colorScheme='teal'>Garrafa</Button>
                </Button.Group>
            </Box>
        </VStack>
    )
}
