import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import DashBoard from '../screens/DashBoard';
import { View,Text } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialBottomTabNavigator();

const Screen = ()=>{
    return(
        <View>
            <Text>Teste</Text>
        </View>
    )
}


export default function MyTabs() {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Screen} />
            <Tab.Screen name="Settings" component={Screen} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}
