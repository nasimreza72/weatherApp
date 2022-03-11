import { useContext } from "react";
import { userContext } from "../Context/Context.jsx";


function Taf(){
    const {location, taf} = useContext(userContext)
    

    return(
        <div className="Taf">
            <h1>{location}</h1><hr/>
            {taf}
            
        </div>
    )
}
export default Taf