import React from "react";
import LoginForm from "./LoginForm";
import Dashboard from "./Dashboard";
import { useUserContext } from "../context/userContext";

const Auth = () => {
    // const {user} = useUserContext();
    const user = false;
    return(
        <>
            {user ? <Dashboard /> : <LoginForm />}
        </>
    )
}

export default Auth;