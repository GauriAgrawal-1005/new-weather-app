import React from "react";

const ShowTemp = ({text}) => {
    return(
        <div>
            <h3>Description: {text.description} </h3>
            <h3>Temperature: {text.temp}</h3>
            <h3>Min Temperature: {text.temp_min}</h3>
            <h3>Max Temperature: {text.temp_max}</h3>
            <h3>Humidity: {text.humidity}</h3>
            <h3>Sunrise: {text.sunrise}</h3>
            <h3>Sunset: {text.sunset}</h3>
            <h3>Country: {text.country}</h3>
        </div>
    )
}

export default ShowTemp;