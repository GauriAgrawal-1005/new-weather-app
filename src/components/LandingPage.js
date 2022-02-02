import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import "../App.css"
// import { UserContext } from "../contexts/UserContext";
// import { useContext } from "react/cjs/react.development";

const LandingPage = () => {
    const city='Jhansi';
    
    const [details, setDetails] = useState({
        temp:0,
        temp_max: 0,
        temp_min: 0,
        feels_like: 0
    });

    useEffect(()=>{
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&&units=metric&&appid=2e51b6c03e0fc2a7f325c730588dcfbb`)
            .then(response => {
                setDetails({
                    temp: response.data.main.temp,
                    temp_max: response.data.main.temp_max,
                    temp_min: response.data.main.temp_min,
                    feels_like: response.data.main.feels_like
                })
            })
    },[])
    
    return(
            <div className="landingpage">
                <div >
                    <p>Click to login to the dashboard</p>
                    <Link to="/login">
                        <button style={{width:'10%'}}>Login</button>
                    </Link>
                </div>
                
                
                <h1>Today's Weather</h1>
                <div>
                    <h3>City Name: {city}</h3>
                </div>
                <div>
                    <h4>Current Temperature: {details.temp}°C</h4>
                    <h4>Minimun Temperature: {details.temp_min}°C</h4>
                    <h4>Maximum Temperature: {details.temp_max}°C</h4>
                    <h4>Feels Like : {details.feels_like}</h4>
                </div>
            </div>
    )
    
}

export default LandingPage;