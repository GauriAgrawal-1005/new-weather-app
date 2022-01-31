import React, { useState } from "react";
import LandingPage from "./LandingPage";
import Dashboard from "./Dashboard";
import { UserContext } from "../contexts/UserContext";
import LoginForm from "./LoginForm";

const Auth = () => {
    const [name, setName] = useState("");
    const [showProfile, setShowProfile] = useState(false);
    return(
        <>
            {console.log('Auth page')};
            
            <UserContext.Provider value={{name, setName, setShowProfile}}>
                {showProfile ? <Dashboard /> : <LoginForm />}
            </UserContext.Provider>
        </>
    )
}

export default Auth;