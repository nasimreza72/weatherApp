import { useContext } from "react";
import { userContext } from "../Context/Context.jsx";

import "../Taf.scss"

import {
    ResponsiveContainer,
    AreaChart,
    XAxis,
    YAxis,
    Area,
    Tooltip,
    CartesianGrid,

} from "recharts";
import { format, parseISO, subDays } from "date-fns";

const data = [];
for(let num = 30; num >= 0; num--) {
    data.push({
        date:subDays(new Date(), num).toISOString().substring(0,10),
        Temp: 5 + (Math.random())*10
    })
}



function Weather() {

    const { celsius, windSpeed, humidity, clouds, location} = useContext(userContext)

    return (
        <div className="weather">
          <h1>{location}</h1>
            <p>
                Temperature: <span>{celsius}°</span>celsius
            </p>
            <p>Wind speed: {windSpeed}kph</p>
            <p>Humidity: {humidity}%</p>
            <p>Clouds: {clouds}</p>
          

            <ResponsiveContainer className="graph-container" width="90%" height={300}>
            <AreaChart data={data}>
                <defs>
                    <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="50%" stopColor="#2451B7" stopOpacity={0.4}></stop>
                        <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05}></stop>
                    </linearGradient>
                </defs>
                <Area dataKey="Temp" stroke="#2451B7" fill="url(#color)" />

                <XAxis 
                    dataKey="date" 
                    axisLine={false}
                    tickLine={false}
                    tickCount={8}
                    />

                <YAxis 
                    dataKey="Temp" 
                    axisLine={false} 
                    tickLine={false} 
                    tickCount={8}
                    tickFormatter={number => `C°${number.toFixed()}`}   
                    />
                    

                <Tooltip />

                <CartesianGrid opacity={0.2} vertical={false}/>

            </AreaChart>
        </ResponsiveContainer>
        </div>
    )
}
export default Weather