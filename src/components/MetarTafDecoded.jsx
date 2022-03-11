 import { useContext } from "react";
import { userContext } from "../Context/Context.jsx";

function MetarTafDecoded(){
    const {location, decoded, loaded}=useContext(userContext)
    
    if(loaded===true){
        console.log(decoded.data[0]);
        return(
            <div>
                {location}<hr/>
                {decoded.data?.map(dataPoint=>(
                    <div><h2>DATA</h2>
                    {dataPoint.forecast?.map(forecastPoint=>(
                        <div>
                            <h3>FORECAST</h3>
                            {forecastPoint.change&&<div>{forecastPoint.change.time_becoming}</div>}
                            {forecastPoint.clouds?.map(cloud=>(
                                <div>{cloud.code} {cloud.text}</div>
                            ))}
                            {forecastPoint.conditions?.map(condition=>(
                                <div>{condition.code} {condition.text}</div>
                            ))}
                        </div>
                    ))}
                    </div>
                ))}
                <pre>{JSON.stringify(decoded,0," -")}</pre>
                {/* {dataAval(decoded.data[0].forecast[0].clouds[0].text)}<br/> */}
                {/* {dataAval(decoded.data[0].forecast[0].conditions[0].text)}<br/>
                {dataAval(decoded.data[0].forecast[0].timestamp.from)}<br/>
                {dataAval(decoded.data[0].forecast[0].timestamp.to)}<br/>
                visibility: {dataAval(decoded.data[0].forecast[0].visibility.meters)}<br/>
                {dataAval(decoded.data[0].forecast[0].wind.degrees)} {dataAval(decoded.data[0].forecast[0].wind.speed_kts)}<br/> */}
            </div>
        )
    }else{return<p>LOADING...</p>}
    
}
export default MetarTafDecoded