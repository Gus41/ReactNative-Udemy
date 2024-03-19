import AsyncStorage from "@react-native-async-storage/async-storage";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export function usePersistState<T>(defaultValue:T,key:string): [T,(value: T) => Promise<void>]{

    const [localState,setLocalState] = useState<T>(defaultValue)

    const storeData = async (value:T)=>{
        try{
            setLocalState(value)
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem(key,jsonValue)
        }catch(e){
            console.log(e)
        }
    }
    useEffect(()=>{
        getData().then((data)=>setLocalState(data))
    },[])

    async function getData(): Promise<T>{
        try{
            const jsonValue = await AsyncStorage.getItem(key)
            return jsonValue != null ? JSON.parse(jsonValue) : defaultValue
        }catch(e){
            console.log("error reading data: "+ e)
            return defaultValue
        }
    }
    return [localState,storeData]
}