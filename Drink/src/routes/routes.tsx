import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import DashBoard from '../screens/DashBoard';
import { View,Text, Icon, PlayIcon, FavouriteIcon, ArrowForwardIcon, QuestionIcon } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import Profile from '../screens/Profile';
import { useState } from 'react';


type ITabRoutes = {
    Settings:undefined,
    DashBoard:undefined,
    Profile:undefined
}
const Tab = createMaterialBottomTabNavigator<ITabRoutes>();

const Screen = ()=>{
    return(
        <View>
            <Text>Teste</Text>
        </View>
    )
}

interface IRoute{}

export const Routes: React.FunctionComponent<IRoute> =()=>{

    const [goal,setGoal] = useState<Number>(1500)

  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="DashBoard" component={DashBoard} options={{
                tabBarIcon:()=> <FavouriteIcon size={5} color='purple'/>
            }} />
            <Tab.Screen name="Settings" component={Screen} options={{
                tabBarIcon:()=> <QuestionIcon size={5} color='black'/>
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon:()=> <ArrowForwardIcon size={5} color='black'/>
            }} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}
