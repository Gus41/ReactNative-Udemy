import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeDrawerNavigator } from '@react-navigation/native-stack';
import Visualize from './screens/Visualize';
import { createDrawerNavigator } from '@react-navigation/drawer';




export default function App() {

  const Drawer = createDrawerNavigator()

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='home' component={Home} />
        <Drawer.Screen name='visualize' component={Visualize} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20
  },
});
