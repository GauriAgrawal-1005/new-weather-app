import React from "react";
import { useUserContext } from "../context/userContext";

const Header = () => {
    const {user} = useUserContext()
    return(
        <>
            <div>
                <h1>Welcome to the Weather App</h1>
            </div>
            <div>
                {/* <h2>Hello, {user.name}</h2> */}
            </div>
        </>
    )
}

export default Header;