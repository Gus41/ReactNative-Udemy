import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './screens/Welcome';
import Initial from './screens/Initial';
import Register from './screens/Register';
import Edit from './screens/Edit';
import Historic from './screens/Historic';
import moment from "moment";
import 'moment/locale/pt-br'

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()

const initialState = {
  user: null,
  atualDay:{
    day:null,
    historic :[],
    amount:0
  },
  driks:[500,1000,1500,2000],
  historic:[]
}
export default class App extends Component{
  state = {
    ...initialState
  }


  componentDidMount = async () => {
    try {
      const state_str = await AsyncStorage.getItem("state");
      const state_obj = JSON.parse(state_str);
  
      if (state_obj) {
        this.setState({ ...state_obj });
      } else {
        this.setState({ ...initialState });
      }
    } catch (error) {
      console.error("Error loading state from AsyncStorage:", error);
    }
  }
  hasUser = ()=>{
    return this.state.user != null
  }

  add = async(user)=>{
    const state = this.state
    state.user = user
    this.setState({state})
    await AsyncStorage.setItem("state",JSON.stringify(state))
    this.render()
  }

  addValue = async (value) => {
    try {
      this.setState((prevState) => {
        const newHistoric = [...prevState.atualDay.historic, parseFloat(value)];
        const newAmount = prevState.atualDay.amount + parseFloat(value);
  
        return {
          atualDay: {
            ...prevState.atualDay,
            day: moment().locale('pt-br').format("DD/MM"),
            historic: newHistoric,
            amount: newAmount
          }
        };
      }, () => {
        AsyncStorage.setItem("state", JSON.stringify(this.state));
      });
    } catch (error) {
      console.error("Error adding value:", error);
    }
  }
  save = async (id, value) => {
    try {
      this.setState((prevState) => {
        const newDrinks = [...prevState.driks];
        newDrinks[id] = parseFloat(value);
  
        return { driks: newDrinks };
      }, () => {
        AsyncStorage.setItem("state", JSON.stringify(this.state));
      });
    } catch (error) {
      console.error("Error saving value:", error);
    }
  }
  

  deleteHistoricValue = async (id) => {
    try {
      this.setState((prevState) => {
        const newHistoric = prevState.atualDay.historic.filter((_, index) => index !== id);
        const newAmount = prevState.atualDay.amount - prevState.atualDay.historic[id];
  
        return {
          atualDay: {
            ...prevState.atualDay,
            historic: newHistoric,
            amount: newAmount
          }
        };
      }, () => {
        AsyncStorage.setItem("state", JSON.stringify(this.state));
      });
    } catch (error) {
      console.error("Error deleting historic value:", error);
    }
  }
  render = ()=>{
    if(this.hasUser()){
      return(
        <NavigationContainer>
          <Drawer.Navigator 
          screenOptions={{headerTintColor:"white"}}
          >
            <Drawer.Screen name='Initial' component={Initial} options={{headerTransparent: true}}
            initialParams={{
              AddValue:this.addValue,
              DrinksValues:this.state.driks,
              amount:this.state.atualDay.amount
            }}
            />
            <Drawer.Screen name='Edit' component={Edit} options={{headerTransparent:true}} 
            initialParams={{
              save:this.save,
              drinks:this.state.driks
            }}
            />
            <Drawer.Screen name='Historic' component={Historic} options={{headerTransparent:true}} 
            initialParams={{
              historic:this.state.atualDay.historic,
              delete:this.deleteHistoricValue
            }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      )
    }else{
      console.log("Não tem usuario")
      console.log(this.state.user)
      return(
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='Welcome' component={Welcome} options={{headerShown:false}}/>
            <Stack.Screen initialParams={{
              add: this.add
            }} name='register' component={Register} options={{headerShown:false}}/>
          </Stack.Navigator>
        </NavigationContainer>
      )
    }

  }
}
