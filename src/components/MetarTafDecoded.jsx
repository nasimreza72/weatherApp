import { useContext } from "react";
import { userContext } from "../Context/Context.jsx";

function MetarTafDecoded() {
  const { decoded, loaded } = useContext(userContext);

  if (loaded === true) {
    console.log(decoded.data[0]);
    return (
      <div>
          
        <pre>{JSON.stringify(decoded, 0, " ")}</pre>

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
                ))} */}
      </div>
    );
  } else {
    return <p>LOADING...</p>;
  }
}
export default MetarTafDecoded;
