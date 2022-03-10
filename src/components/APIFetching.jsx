import { useEffect } from "react";
import axios from "axios";
import {useContext} from "react";
import { userContext } from "../Context/Context.jsx";


export default function APIFetching(props){

  const { celsius, setCelsius, windSpeed, setWindSpeed, humidity, setHumidity, clouds, setClouds, location, setLocation, cityName, setCityName, latitude, setLatitude, longitude, setLongitude } = useContext(userContext)
    
  const params = {
    access_key: "3759bf50e5fbe59226c42863dfaff27a",
    query: cityName,
  };

  useEffect(() => {
    axios
      .get("http://api.positionstack.com/v1/forward", { params })
      .then((response) => {
        setLatitude(response.data.data[0].latitude);
        setLongitude(response.data.data[0].longitude);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [cityName]);

  console.log(latitude, longitude);

  useEffect(() => {
    const key = "?x-api-key=8cf71fb165574cd4a17423a33f";
    fetch(`https://api.checkwx.com/metar/lat/${latitude}/lon/${longitude}/radius/50/decoded`+key)
      .then((response) => response.json())
      .then((result) => {
        setCelsius(result.data[0].temperature.celsius);
        setWindSpeed(result.data[0].wind.speed_kph);
        setHumidity(result.data[0].humidity.percent);
        setClouds(result.data[0].clouds[0].text);
        setLocation(result.data[0].station.location);
        console.log(result);
      })
      .catch((error) => console.error(error));
  }, [longitude]);
}


    






