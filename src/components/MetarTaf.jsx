import { useContext } from "react";
import { userContext } from "../Context/Context.jsx";



function MetarTaf(){
    const {location, raw_text,taf} = useContext(userContext)

    return(
        <div>
            {location}<hr/>
            METAR: {raw_text}<br/>
            TAF: {taf}
        </div>
    )
}
export default MetarTaf