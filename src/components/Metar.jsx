import { useContext } from "react";
import { userContext } from "../Context/Context.jsx";


function Metar(){
    const {location, raw_text} = useContext(userContext)

    return(
        <div>
            {location}<hr/>
            {raw_text}
        </div>
    )
}
export default Metar