import AsyncStorage from "@react-native-async-storage/async-storage"

async function getUserData(){
    const user = await AsyncStorage.getItem('User')
    return JSON.parse(user) 
}
function getGoal(user){
    return 2000
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
    }catch(e){
        console.log(e)
    }
}
async function getDrinkValues(){
    const drinkValues = await AsyncStorage.getItem('Drinks') 
    return drinkValues
}
async function firstAcces(){
    const drinkValues = await AsyncStorage.getItem('Drinks') 
    if(drinkValues){
        return false
    }
    console.log("PRIMEIRO ACESSO")
    return true
}
export {getUserData,getGoal,saveData,firstAcces,saveDrinkValues}