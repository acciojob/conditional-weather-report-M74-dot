import React from "react";


const WeatherDisplay = ({data}) =>{
    const tempStyle = {
        color: data.temperature >20 ? "red" : "blue"
    }
    return(
        <div>
            <p>Temperature: <span style={tempStyle}>{data.temperature}</span></p>
            <p>Conditions: {data.conditions}</p>
        </div>
    )
}

export default WeatherDisplay;