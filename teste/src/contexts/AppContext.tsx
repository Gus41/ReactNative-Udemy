import { createContext } from "react";
import { usePersistState } from "../hooks/usePersistState";
import IUser from "../interfaces/IUser";
import IHistoric from "../interfaces/IHistoric";
import IDrinks from "../interfaces/IDrinks";
import IAtualDay from "../interfaces/IAtualDay";

interface IAppContext{
    user:{},
    setUser:(value: IUser) => Promise<void>,
    atualDay: IAtualDay,
    setAtualDay : (value: IAtualDay) => Promise<void>,
    historic: IHistoric,
    setHistoric: (value:IHistoric) => Promise<void>
    drinks:IDrinks,
    setDrinks : (value:IDrinks) => Promise<void>
}
//MOCKS
const USER : IUser = {
    name:'default',
    weight:70,
    heigth:1.78,
    sex:'M', // M || F || undefined
    goal:2000 
}
const ATUAL_DAY : IAtualDay = {
    amount:0,
    date: new Date(),
    historic:[]
}
const HISTORIC :IHistoric = {
    data : []
}
const DRINKS : IDrinks = {
    data: [{id:0,value:500},{id:1,value:1000},{id:2,value:1500},{id:3,value:2000},]
}
//-------------------------------------------------------
export const AppContext = createContext<IAppContext>({
    user : USER,
    setUser: ()=> Promise.resolve(),
    atualDay: ATUAL_DAY,
    setAtualDay: ()=>Promise.resolve(),
    historic : HISTORIC,
    setHistoric: ()=> Promise.resolve(),
    drinks:DRINKS,
    setDrinks : ()=>Promise.resolve()
})
interface AppProviderProps {
    children: React.ReactNode
}
export const AppProvider: React.FC<AppProviderProps> = ({children})=>{
    const [user,setUser] = usePersistState<IUser>(USER,'user')
    const [atualDay,setAtualDay] = usePersistState<IAtualDay>(ATUAL_DAY,'atualDay')
    const [historic,setHistoric] = usePersistState<IHistoric>(HISTORIC,'historic')
    const [drinks,setDrinks] = usePersistState<IDrinks>(DRINKS,'drinks')

    return(
        <AppContext.Provider value={{user,setUser,atualDay,setAtualDay,setHistoric,historic,drinks,setDrinks}}>
            {children}
        </AppContext.Provider>
    )
}