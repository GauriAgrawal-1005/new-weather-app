import { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import "../App.css"

const LandingPage = () => {
    const city='Jhansi';
    
    const [details, setDetails] = useState({
        temp:0,
        temp_max: 0,
        temp_min: 0,
        feels_like: 0
    });
    // console.log(date);

   
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&&units=metric&&appid=efc593b34ba5889a468a4e80e9b0a6a5`)
                .then(response => {
                    setDetails({
                        temp: response.data.main.temp,
                        temp_max: response.data.main.temp_max,
                        temp_min: response.data.main.temp_min,
                        feels_like: response.data.main.feels_like
                    })
                })
    
    return(
            <div>
                {/* <Link to="/login">
                    <button style={{width:'5%'}}>Login</button>
                </Link> */}
                
                <h1>Today's Weather</h1>
                <div>
                    <h3>City Name: {city}</h3>
                </div>
                <div>
                    <h4>Current Temperature: {details.temp}</h4>
                    <h4>Minimun Temperature: {details.temp_min}</h4>
                    <h4>Maximum Temperature: {details.temp_max}</h4>
                    <h4>Feels Like : {details.feels_like}</h4>
                </div>
            </div>
    )
    
}

export default LandingPage;