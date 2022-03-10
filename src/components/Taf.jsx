import { useContext } from "react";
import { userContext } from "../Context/Context.jsx";


function Taf(){
    const {location} = useContext(userContext)

    return(
        <div>
            {location}
        </div>
    )
}
export default Taf