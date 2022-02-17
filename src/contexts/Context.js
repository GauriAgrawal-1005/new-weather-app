import { createContext, useContext, useState } from "react";


export const User = createContext();

export const UserContext = ({children}) => {
    const [name, setName] = useState("");

    return (
        <User.Provider value = {{name, setName}}>
            {children}
        </User.Provider>
    )
}

const UserState = () => {
    console.log(useContext(User));
    const { name, setName } = useContext(User);
    return {name, setName};
};

export default UserState;

