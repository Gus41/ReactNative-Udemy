import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenA from "../views/ScreenA";
import ScreenB from "../views/ScreenB";
import ScreenC from "../views/ScreenC";
import StepStack from "../components/StepStack";

const Stack = createNativeStackNavigator()

export default(props)=>{
    return(
        <Stack.Navigator initialRouteName="ScreenA" op>
            <Stack.Screen name="ScreenA" 
            options={{animation:'slide_from_left',title:'Tela inicial'}}>
                {props=>(
                    <StepStack {...props} next='ScreenB'>
                        <ScreenA />
                    </StepStack>
                )}

            </Stack.Screen>
            <Stack.Screen name="ScreenB">
                {props=>(
                    <StepStack next='ScreenC' {...props} back>
                        <ScreenB />
                    </StepStack>
                )}
            </Stack.Screen>
            <Stack.Screen name="ScreenC" component={ScreenC} />
        </Stack.Navigator>
    )
}
