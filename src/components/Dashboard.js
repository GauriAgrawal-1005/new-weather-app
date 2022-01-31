import React, { useState, useContext } from 'react';
import axios from 'axios';
import ShowTemp from './ShowTemp';
import { UserContext } from '../contexts/UserContext';


const Dashboard =() => {

    const {name}=useContext(UserContext);

    const [city, setCity] = useState("")
    const [data, setData] = useState({
        description: "",
        temp: 0,
        temp_max: 0,
        temp_min: 0,
        humidity: 0,
        sunrise: 0,
        sunset: 0,
        country: "",
    })

    const handleSubmit = () => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&&units=metric&&appid=efc593b34ba5889a468a4e80e9b0a6a5`)
            .then((response) => {
                setData({
                    description: response.data.weather[0].description,
                    temp: response.data.main.temp,
                    temp_max: response.data.main.temp_max,
                    temp_min: response.data.main.temp_min,
                    humidity: response.data.main.humidity,
                    sunrise: response.data.sys.sunrise,
                    sunset: response.data.sys.sunset,
                    country: response.data.sys.country,
                })
                console.log(response.data);
            })
            .catch((error) => {
                if(error.status === 404){
                    <h1>City Not found</h1>
                }
            })
    }

    return (
        <>
            <div style={{backgroundColor: "lightblue"}}>
                <h1 style={{backgroundColor: "lightyellow"}}>Welcome {name}</h1>
                <h1 style={{backgroundColor: "lightyellow"}}>Weather Forecast!!</h1>
                <h2 >Get all your essential weather data for a specific location.</h2>
                <div id="main">
                    <div className="input-parent">
                        <label ><h2 >Enter Your City</h2></label>
                        <input 
                            type="text" 
                            value={city} 
                            placeholder='Enter city name' 
                            onChange={(e) => {
                                setCity(e.target.value);
                            }} 
                        />
                        <button type='submit' onClick={handleSubmit} >get temp</button>
                    </div>
                    
                </div>
                
                <ShowTemp text ={data} city={city}></ShowTemp>
            </div>

            
        </>
    )
}

export default Dashboard;