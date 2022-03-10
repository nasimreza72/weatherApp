import { useContext } from "react";
import { userContext } from "../Context/Context.jsx";

function dataAval(link){
    return (link?link:"empty")
}

function MetarTafDecoded(){
    const {location, decoded, loaded}=useContext(userContext)
    
    if(loaded===true){
        console.log(decoded.data[0]);
        return(
            <div>
                {location}<hr/>
                {/* <pre>{JSON.stringify(decoded,0,"-")}</pre> */}
                {dataAval(decoded.data[0].forecast[0].clouds[0].text)}<br/>
                {dataAval(decoded.data[0].forecast[0].clouds[0].text)}<br/>
                {dataAval(decoded.data[0].forecast[0].conditions[0].text)}<br/>
                {dataAval(decoded.data[0].forecast[0].timestamp.from)}<br/>
                {dataAval(decoded.data[0].forecast[0].timestamp.to)}<br/>
                visibility: {dataAval(decoded.data[0].forecast[0].visibility.meters)}<br/>
                {dataAval(decoded.data[0].forecast[0].wind.degrees)} {dataAval(decoded.data[0].forecast[0].wind.speed_kts)}<br/>
            </div>
        )
    }
    
}
export default MetarTafDecoded