import React, { createContext, useContext, useReducer } from "react";
import users from "../data/users";

const initialState = { users }
const UsersContext = createContext({})
export const UsersProvider = props=>{
    
    function reducer(state,action){
        if(action.type === 'deleteUser'){
            const user = action.payload
            return{
                users: state.users.filter(u=> u.id !== user.id)
            }
        }
        if(action.type === 'createUser'){
            const user = action.payload
            user.id = state.users.length + 1
            return {
                ...state,
                users: [...state.users, user]
            }
        }
        if(action.type === 'updateUser'){
            const updatedUser = action.payload
            return{
                ...state,
                users : state.users.map(u=> u.id === updatedUser.id ? updatedUser : u)
            }
        }

        return state
    }

    const [state,dispatch] = useReducer(reducer,initialState)

    return(
        <UsersContext.Provider value={{state, dispatch}} >
            {props.children}
        </UsersContext.Provider>
    )
}
export default UsersContext