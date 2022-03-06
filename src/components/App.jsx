import ApiData from "../ApiData.jsx"
import Taf from "./Taf.jsx"
import "./App.css"
import Input from "./Input.jsx"
import Metar from "./Metar.jsx"


export default function App(){

 return(
    <div className="App">
         <div className="info-box">
            <ApiData>
                <Input />
                <Taf />
                <Metar />
            </ApiData>
         </div>
    </div>
 )



}