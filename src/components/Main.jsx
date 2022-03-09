import { Routes, Route } from "react-router-dom";
import Weather from "../components/Weather.jsx"
import Metar from "../components/Metar.jsx"
import Taf from "../components/Taf.jsx"
import MetarTaf from "../components/MetarTaf.jsx"
import MetarTafDecoded from "./MetarTafDecoded.jsx"
import Archive from "../components/Archive.jsx"

function Main(){

    return(
        <main>
            <Routes>
                <Route index element={<p>hi, it is a beginning!</p>}/>
                <Route path="main/weather" element={<Weather />}/>
                <Route path ="main/metar" element={<Metar/>}/>
                <Route path ="main/taf" element={<Taf/>}/>
                <Route path ="main/metar-taf" element={<MetarTaf/>}/>
                <Route path ="main/metar-taf-decoded" element={<MetarTafDecoded />}/>
                <Route path="main/archive" element={<Archive />}/>
            </Routes>
        </main>
    )
}

export default Main