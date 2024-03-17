import React, { createContext, useState } from "react";
import IUser from "../interfaces/UserInterface";
import AsyncStorage from "@react-native-async-storage/async-storage";


interface IUserContext{
    user: IUser,
    goal:number,
    setGoal: React.Dispatch<React.SetStateAction<number>>
}
const GOAL = 2000
const USER = {
    name:'Gustavo'
}
export const UserContext = createContext<IUserContext>({
    goal: GOAL,
    setGoal: ()=>{},
    user: USER
})

interface UserProviderProps {
    children: React.ReactNode
}
export const UserProvider: React.FC<UserProviderProps> = ({children})=>{
    const [goal,setGoal] = useState<number>(GOAL)
    const [user] = useState<IUser>(USER)
    
    const storeData = async (value:number)=>{
        try{
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('state',jsonValue)
        }catch(e){
            console.log(e)
        }
    }

    const getData: ()=>Promise<Number> = async ()=>{
        try{
            const jsonValue = await AsyncStorage.getItem('state')
            return jsonValue != null ? JSON.parse(jsonValue) : null
        }catch(e){
            console.log(e)
        }
    }

    return(
        <UserContext.Provider value={{goal,setGoal,user}}>
            {children}
        </UserContext.Provider>
    )
}