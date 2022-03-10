import { useContext } from "react";
import { userContext } from "../Context/Context.jsx";



function Weather() {

    const { celsius, windSpeed, humidity, clouds, location} = useContext(userContext)

    return (
        <div className="weather">
            <p>
                Temperature: <span>{celsius}°</span>celsius
            </p>
            <p>Wind speed: {windSpeed}kph</p>
            <p>Humidity: {humidity}%</p>
            <p>Clouds: {clouds}</p>
            <p>{location}</p>
        </div>
    )
}
export default Weather