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


  componentDidMount = async ()=>{
    const state_str = await AsyncStorage.getItem("state")
    console.log(state_str)
    const state_obj = JSON.parse(state_str)
    if(state_obj){
      console.log(state_obj)
      this.setState(state_obj)
    }else{
      this.setState(initialState)
    }
    console.log(this.state)
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

  addValue = async (value)=>{
    const state = this.state
    state.atualDay.day = moment().locale('pt-br').format("DD/MM")
    state.atualDay.historic.push(parseFloat(value))
    state.atualDay.amount += parseFloat(value)
    this.setState({state})
    await AsyncStorage.setItem("state",JSON.stringify(state))
    this.forceUpdate()
  }
  save = async(id,value)=>{
    const state = this.state
    state.driks[id] = parseFloat(value)
    this.setState({state})
    await AsyncStorage.setItem("state",JSON.stringify(state))
    this.render()
  }

  deleteHistoricValue = async (id)=>{
    const state = this.state
    let newHistoric = []
    for(let i = 0 ; i < this.state.atualDay.historic.length ; i++){
      if(i!=id){
        newHistoric.push(this.state.atualDay.historic[i])
      }else{
        state.atualDay.amount -= this.state.atualDay.historic[i]
      }
    }
    state.atualDay.historic = newHistoric
    this.setState({state})
    await AsyncStorage.setItem("state",JSON.stringify(state))

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
