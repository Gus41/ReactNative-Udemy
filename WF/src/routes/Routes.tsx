import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"
import Register from "../screens/Register"
import UserRepository from '../../database/providers/UserProvider';
import React from "react";
import Welcome from "../screens/Welcome";
import Initial from "../screens/Initial";
import Edit from "../screens/Edit";
import DrinkRepository from "../../database/providers/DrinkProvider";


const Mock = ()=>{
    return(
        <>
        </>
    )
}

const Drawer = createDrawerNavigator()
const userRepository = new UserRepository()
const drinkRepository = new DrinkRepository()

export default class Routes extends React.Component{

    state = {
        user : false,
        drinks:[{id:0,value:500},{id:0,value:1000},{id:0,value:1500},{id:0,value:2000}],
    }
    async componentDidMount(){
        const user = await userRepository.all()
        console.log(user)
        if(user.length > 0){
            console.log("Usuario encontrado no banco de dados: ")
            console.log(user)
            this.setState({user:true})
        }else{
            console.log("Usuário não encontrado no banco de dados.")
            this.setState({user:false})
        }
        const drinksUpdated = await drinkRepository.all()
        if(drinksUpdated.length > 0){
            // no minimo uma drink foi atualizada anteriormente
            const drinks = [...this.state.drinks]
            drinksUpdated.map(d=>{
                drinks[d.id] = {id:d.id, value:d.value}
            })
            //console.log(drinks)
            this.setState({drinks})
        }else{
            //default
        }
        
    }
    render(): React.ReactNode {
        console.log(this.state.user)
        return(
            <NavigationContainer>
                <Drawer.Navigator>
                    {
                        this.state.user ? 
                        false
                        :
                        <Drawer.Screen name="Welcome" component={Welcome} />
                    }

                    <Drawer.Screen options={{headerTitle:''}} name="initial" component={Initial} />     
                    <Drawer.Screen name="register" options={{title:'Meus dados'}} component={Register} />
                    <Drawer.Screen name="edit" initialParams={this.state.drinks} component={Edit} />
                </Drawer.Navigator>
            </NavigationContainer>
        )
    }

}