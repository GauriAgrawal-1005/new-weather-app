import React, { useState} from 'react';
import axios from 'axios';
import ShowTemp from './ShowTemp';
import  UserState from '../contexts/Context';


const Dashboard =() => {

    const {name} = UserState();

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
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&&units=metric&&appid=2e51b6c03e0fc2a7f325c730588dcfbb`)
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
                
            })
            .catch((error) => {
                if(error.status === 404){
                    <h1>City Not found</h1>
                }
            })
    }

    const handleLogout = () => {
        localStorage.clear();
        window.location.pathname = "/login";
    }

    return (
        <>
            <div id="main" >
                
                <button onClick={handleLogout}>Logout</button>
                <h1 >Welcome {name} </h1>
                <h1 >Weather Forecast!!</h1>
                <h2 >Get all your essential weather data for a specific location.</h2>
                <div >
                    <div className="input-parent">
                        <label ><h4 >Enter Your City</h4></label>
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