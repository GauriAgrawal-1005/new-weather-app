import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserState from "../contexts/Context";
import '../App.css';


const LoginForm = () => {

    const {name, setName} = UserState();
   
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState('');
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    
    let navigate = useNavigate();

    const handleSubmit=()=>{
        setFormErrors(validate(name, email, password))
        setIsSubmit(true);
    }

    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(name, email, password);
            localStorage.setItem( "loggedInUser",JSON.stringify({UserName: name, UserEmail: email, UserPassword: password}));
            navigate("/dashboard");
        }
    },[formErrors])

    const validate = (name, email, password) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!name){
            errors.name = "Username is required!"
        }
        if(!email){
            errors.email = "Email is required!"
        }
        else if(!regex.test(email)){
            errors.email = "This is not a valid email"
        }
        if(!password){
            errors.password = "Password is required!"
        }
        else if(password.length<5){
            errors.password = "Password must be more than 5 characters"
        }
        else if(password.length>10){
            errors.password = "Password must be less than 10 characters"
        }
        return errors;
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
                <p style={{color: "red"}}>{formErrors.name}</p>
                
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
                <p style={{color: "red"}}>{formErrors.email}</p>
                
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
                <p style={{color: "red"}}>{formErrors.password}</p>

                <button type="submit" onClick={handleSubmit}>Login</button>
                

        </div>
    )

}

export default LoginForm;