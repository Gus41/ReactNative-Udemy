import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"
import Register from "../screens/Register"
import UserRepository from '../../database/providers/UserProvider';
import React from "react";
import Initial from "../screens/Initial";
import Welcome from "../screens/Welcome";


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
        const users = await userRepository.all()
        if(users.length > 1){
            this.setState({user:true})
        }else{
            this.setState({user:false})
        }
        
    }
    render(): React.ReactNode {
        return(
            <NavigationContainer>
                <Drawer.Navigator>
                    {
                        this.state.user ? 
                        <Drawer.Screen name="Mock" component={Mock} />
                        :
                        <Drawer.Screen name="Welcome" component={Welcome} />
                    }     
                    <Drawer.Screen name="register" component={Register} />
                    
                </Drawer.Navigator>
            </NavigationContainer>
        )
    }

}