import React, { createContext, useEffect, useState } from "react";
import IUser from "../interfaces/UserInterface";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { usePersistState } from "../hooks/usePersistState";


interface IUserContext{
    user: IUser,
    goal:number,
    setGoal: (value: number) => Promise<void>,
    setUser: (user: IUser)=> Promise<void>
}
const GOAL = 2000
const USER : IUser = {
    name:'Gustavo',

}
export const UserContext = createContext<IUserContext>({
    goal: GOAL,
    user: USER,
    setGoal: ()=> Promise.resolve(),
    setUser: ()=> Promise.resolve()
})

interface UserProviderProps {
    children: React.ReactNode
}
export const UserProvider: React.FC<UserProviderProps> = ({children})=>{
    const [goal,setGoal] = usePersistState<number>(GOAL,'state')
    const [user,setUser] = usePersistState<IUser>(USER,'user')
    
   
    return(
        <UserContext.Provider value={{goal,user,setGoal, setUser}}>
            {children}
        </UserContext.Provider>
    )
}