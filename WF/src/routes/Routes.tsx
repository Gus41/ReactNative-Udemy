import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"
import Register from "../screens/Register"
import UserRepository from '../../database/providers/UserProvider';
import React from "react";
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
        const user = await userRepository.all()
        console.log(user)
        if(user){
            this.setState({user:true})
        }else{
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