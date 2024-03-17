import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

interface IEnter{

}

export function usePersistState(defaultValue:number): [localState:number,setLocalState: React.Dispatch<React.SetStateAction<number>>]{

    const [localState,setLocalState] = useState<number>(defaultValue)

    
    const storeData = async (value:number)=>{
        try{
            setLocalState(value)
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('state',jsonValue)
        }catch(e){
            console.log(e)
        }
    }
    useEffect(()=>{
        getData().then((data)=>setLocalState(data))
    },[])

    async function getData(): Promise<number>{
        try{
            const jsonValue = await AsyncStorage.getItem('state')
            return jsonValue != null ? JSON.parse(jsonValue) : 2000
        }catch(e){
            console.log("error reading data: "+ e)
            return 2000
        }
    }




    return [localState,setLocalState]
}