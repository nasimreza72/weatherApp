import { useContext, useEffect, useState } from "react";
import { userContext } from "../Context/Context.jsx";
import moment from "moment";


function Weather() {
  const {
    celsius,
    windSpeed,
    humidity,
    clouds,
    location,
    longitude,
    ICAO,
    cityName,
    sunRise,
    setSunRise,
    sunSet,
    setSunSet,
  } = useContext(userContext);

 

  return (
    <div className="weather">
      <p><span>{celsius}°</span>celsius</p>
      <p>{location}</p>
      <p>{moment().format("dddd")}, {moment().format("LL")}</p>
      <p>Wind speed: {windSpeed}kph</p>
      <p>Humidity: {humidity}%</p>
      <p>Clouds: {clouds}</p>
      <p>
        sunrise:{sunRise} & sunset:{sunSet}
      </p>
    </div>
  );
}
export default Weather;
