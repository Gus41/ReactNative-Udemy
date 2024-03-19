import { createContext, useContext } from "react";
import { usePersistState } from "../hooks/usePersistState";
import IUser from "../interfaces/IUser";
import IHistoric from "../interfaces/IHistoric";
import IDay from "../interfaces/IDay";

interface IAppContext{
    user:{},
    setUser:(value: IUser) => Promise<void>,
    atualDay: IDay,
    setAtualDay : (value: IDay) => Promise<void>,
    historic: IHistoric,
    setHistoric: (value:IHistoric) => Promise<void>
}
//MOCKS
const USER : IUser = {
    name:'default',
    weight:70,
    heigth:1.78,
    sex:'M', // M || F || undefined
    goal:2000 
}
const ATUAL_DAY : IDay = {
    amount:110,
    date: new Date()
}
const HISTORIC :IHistoric = {
    data : []
}
//-------------------------------------------------------
export const AppContext = createContext<IAppContext>({
    user : USER,
    setUser: ()=> Promise.resolve(),
    atualDay: ATUAL_DAY,
    setAtualDay: ()=>Promise.resolve(),
    historic : HISTORIC,
    setHistoric: ()=> Promise.resolve()
})
interface AppProviderProps {
    children: React.ReactNode
}
export const AppProvider: React.FC<AppProviderProps> = ({children})=>{
    const [user,setUser] = usePersistState<IUser>(USER,'user')
    const [atualDay,setAtualDay] = usePersistState<IDay>(ATUAL_DAY,'atualDay')
    const [historic,setHistoric] = usePersistState<IHistoric>(HISTORIC,'historic')

    return(
        <AppContext.Provider value={{user,setUser,atualDay,setAtualDay,setHistoric,historic}}>
            {children}
        </AppContext.Provider>
    )
}