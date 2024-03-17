import React, { createContext, useEffect, useState } from "react";
import IUser from "../interfaces/UserInterface";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { usePersistState } from "../hooks/usePersistState";


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
    user: USER,
    setGoal:()=>{}
})

interface UserProviderProps {
    children: React.ReactNode
}
export const UserProvider: React.FC<UserProviderProps> = ({children})=>{
    const [goal,setGoal] = usePersistState(GOAL)
    const [user] = useState<IUser>(USER)
    
   
    return(
        <UserContext.Provider value={{goal,user,setGoal}}>
            {children}
        </UserContext.Provider>
    )
}