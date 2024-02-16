import AsyncStorage from "@react-native-async-storage/async-storage"

async function getUserData(){
    const user = await AsyncStorage.getItem('User')
    return JSON.parse(user) 
}
function getGoal(user){
    return 2000
}



export {getUserData,getGoal}