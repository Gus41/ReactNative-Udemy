import { createDrawerNavigator } from '@react-navigation/drawer';
import Initial from './screens/Initial';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

const Drawer = createDrawerNavigator();
function Article(){
  return(
    <>
    </>
  )
}
export default()=>{
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={
        {
          drawerActiveBackgroundColor:'black',
          drawerActiveTintColor:"black",
        }
      }>
        <Drawer.Screen name="Initial" component={Initial} />
      </Drawer.Navigator>
      <StatusBar barStyle={'dark-content'} />
    </NavigationContainer>
  );
}