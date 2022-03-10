import { useContext } from "react";
import { userContext } from "../Context/Context.jsx";


function Taf(){
    const {location, taf} = useContext(userContext)

    return(
        <div>
            {location}<hr/>
            {taf}
        </div>
    )
}
export default Taf