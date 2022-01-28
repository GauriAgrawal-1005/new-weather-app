import React, { createContext, useState, useContext } from "react";

export const userContext = createContext({
        user: null,
        logIn: ()=>{},
        logOut: ()=>{}
})

//Set initial state of user
const USER = {name:'Guest', isGuest: true}

export const UserContextProvider = ({children}) => {

    const [user, setUser] = useState(USER);
    

    const logIn = (userName) => {
        setUser({isGuest: false, name: userName})
    }

    const logOut = () => {
        setUser(USER);
    }

    return(
        <userContext.Provider value={user, logIn, logOut}>
            {children}
        </userContext.Provider>
    )
}

export const useUserContext=()=>{
    const {user, logIn, logOut} = useContext(userContext);
    console.log(user);
    return(
        {user,logIn, logOut}
    )
}