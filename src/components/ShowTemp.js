import React from "react";

const ShowTemp = ({text, city}) => {
    return(
        <div>
            <h2>Weather details of {city}</h2>
            <h3>Description: {text.description} </h3>
            <h3>Temperature: {text.temp}°C</h3>
            <h3>Min Temperature: {text.temp_min}°C</h3>
            <h3>Max Temperature: {text.temp_max}°C</h3>
            <h3>Humidity: {text.humidity}</h3>
            <h3>Sunrise: {text.sunrise}</h3>
            <h3>Sunset: {text.sunset}</h3>
            <h3>Country: {text.country}</h3>
        </div>
    )
}

export default ShowTemp;