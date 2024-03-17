import React, { createContext, useState } from "react";
import IUser from "../interfaces/UserInterface";

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
    return(
        <UserContext.Provider value={{goal,setGoal,user}}>
            {children}
        </UserContext.Provider>
    )
}