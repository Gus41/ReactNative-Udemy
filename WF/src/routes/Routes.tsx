import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"
import Register from "../screens/Register"
import UserRepository from '../../database/providers/UserProvider';
import React from "react";
import Welcome from "../screens/Welcome";
import Initial from "../screens/Initial";


const Mock = ()=>{
    return(
        <>
        </>
    )
}

const Drawer = createDrawerNavigator()
const userRepository = new UserRepository()
export default class Routes extends React.Component{

    state = {
        user : false
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
                </Drawer.Navigator>
            </NavigationContainer>
        )
    }

}