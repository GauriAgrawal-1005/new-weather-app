import React, { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import '../App.css';
import { useNavigate } from "react-router-dom";

const LoginForm = () => {

    // const navigate = useNavigate();

    const {name, setName, setShowProfile} = useContext(UserContext);
   
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState('');

    

    const handleClick=()=>{
        setShowProfile(true);
        
    }

    return(
        <div id="main">
            
                <div className="input-parent">
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
                <div className="input-parent">
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
                
                <div className="input-parent">
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

                <button type="submit" onClick={handleClick}>Login</button>
                

        </div>
    )

}

export default LoginForm;