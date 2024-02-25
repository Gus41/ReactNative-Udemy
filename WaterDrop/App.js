import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ScreenA from './screens/ScreenA'
import { NavigationContainer } from '@react-navigation/native';
const Drawer = createDrawerNavigator()

export default function App (){
    return(
      <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen options={{headerShown:false}} name="A" component={ScreenA}/>
        </Drawer.Navigator>
      </NavigationContainer>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
