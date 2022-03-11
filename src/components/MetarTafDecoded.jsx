import { useContext } from "react";
import { userContext } from "../Context/Context.jsx";

function MetarTafDecoded() {
  const { decoded, loaded } = useContext(userContext);

  if (loaded === true) {
    console.log(decoded.data[0]);
    return (
      <div>
        {/* Map through the object to fix missing Api format or same name objects all the data */}
        {/* {location}<hr/>
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
                ))}  */}
        {(decoded.data[0].forecast[0].conditions)?(decoded.data[0].forecast[0].conditions)[0].text : ""}

        
        {/* <br />
        {decoded.data[0].forecast[0].timestamp.from}
        <br />
        {decoded.data[0].forecast[0].timestamp.to?||""} */}
        {/* <br />
        visibility: {decoded.data[0].forecast[0].visibility.meters}
        <br />
        {decoded.data[0].forecast[0].wind.degrees}{" "}
        {decoded.data[0].forecast[0].wind.speed_kts}
 */}

        <pre>{JSON.stringify(decoded, 0, " ")}</pre>

      </div>
    );
  } else {
    return <p>LOADING...</p>;
  }
}
export default MetarTafDecoded;
