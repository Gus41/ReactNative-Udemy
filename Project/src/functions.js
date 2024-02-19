import AsyncStorage from "@react-native-async-storage/async-storage"

async function getUserData(){
    const user = await AsyncStorage.getItem('User')
    return JSON.parse(user) 
}

async function saveData(data){
    try{
        await AsyncStorage.setItem('User',JSON.stringify(data))
    }catch(e){
        console.log(e)
    }
}
async function saveDrinkValues(values){
    try{
        await AsyncStorage.setItem('Drinks',JSON.stringify(values))
        console.log('Valores salvos no banco de dados')
        const items = await AsyncStorage.getItem("Drinks")
        console.log(items)
    }catch(e){
        console.log(e)
    }
}
async function getDrinkValues(){
    const drinkValues = await AsyncStorage.getItem('Drinks') 
    return [...drinkValues]
}
async function firstAcces(){
    const drinkValues = await AsyncStorage.getItem('Drinks') 
    if(drinkValues){
        return false
    }
    console.log("PRIMEIRO ACESSO")
    return true
}
export {getUserData,firstAcces,saveDrinkValues,getDrinkValues}