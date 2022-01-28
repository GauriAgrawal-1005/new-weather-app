import React, { useState } from "react";
import { useUserContext } from "../context/userContext";
// import { useUserContext } from "../Context/userContext";
// import Dashboard from "./Dashboard";

const LoginForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState('');

    const {logIn} = useUserContext();

    const handleSubmit=(e)=>{
        e.preventDefault()
        const newUser = {name: name, email: email, password: password};
        logIn(newUser.name);
        console.log(newUser.name)

        localStorage.setItem('New user email', newUser.email);
        localStorage.setItem('New user password', newUser.password);
        
        console.log(newUser);
    }

    return(
        <div className="ui container">
            
            <form action="submit" onSubmit={handleSubmit}>
            <div>
                    <label htmlFor="name">Name</label>
                    <input 
                        type='text' 
                        name="name" 
                        id="name"  
                        required 
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                    />
                    
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        type='text' 
                        name="email" 
                        id="email"  
                        required 
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    
                </div>
                
                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                        type='password' 
                        name="password" 
                        id="password" 
                        autoComplete="off" 
                        required 
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>

                <button type="submit">Login</button>
                {/* <Dashboard ></Dashboard> */}
                
            </form>
        </div>
    )

}

export default LoginForm;