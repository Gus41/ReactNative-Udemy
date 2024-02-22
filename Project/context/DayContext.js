import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useReducer } from "react";
import moment from "moment";
import 'moment/locale/pt-br'
async function getDay(){
    let d = await AsyncStorage.getItem("AtualDay")
    d = JSON.parse(d)
    console.log(d)
    return d
}
const getAllDay = async()=>{
    const ret = await AsyncStorage.getItem("AtualDay")
    return ret
}
const initialState = getDay()
const DayContext = createContext({})
export const DayProvider = props=>{
    let d = getDay()
    async function reducer(state,action){
        if(action.type === 'getAmount'){
            return d
        }
        if(action.type === 'reload'){
            d = getDay()
            console.log("CONTEXT")
            console.log(d)
            console.log("CONTEXT")
            return getDay()
        }
        if(action.type == 'delete'){
           
        }

        return state
    }
    const [state,dispatch] = useReducer(reducer,initialState)

    return(
        <DayContext.Provider value={{state,dispatch}}>
            {props.children}
        </DayContext.Provider>
    )
}
export default DayContext