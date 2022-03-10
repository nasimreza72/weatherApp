import React from 'react'
import { useState } from "react";

export const userContext = React.createContext(null)

export default function UserContextProvider (props) {

    const [celsius, setCelsius] = useState([]);
    const [windSpeed, setWindSpeed] = useState([]);
    const [humidity, setHumidity] = useState([]);
    const [clouds, setClouds] = useState([]);
    const [location, setLocation] = useState([]);
    const [cityName, setCityName] = useState("Berlin");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");


    // all new state will go up and pass variable and function in the contextValue



    const contextValue = { celsius, setCelsius, windSpeed, setWindSpeed, humidity, setHumidity, clouds, setClouds, location, setLocation, cityName, setCityName, latitude, setLatitude, longitude, setLongitude }

    return(
        <userContext.Provider value={contextValue}>
            {props.children }
        </userContext.Provider>
    )
}