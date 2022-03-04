import { useEffect, useRef, useState } from "react"

//const arrayOfAirports = ["EDDF",EDDK,EDDB,EDDC,EDDW,EDLW,EDDL,EDDE,EDFH,EDDH,EDDV,EDSB,EDVK,EDDP,EDFM,EDDM,EDDG,EDDN,EDDS] 




export default function ApiData(){
    const url = "https://api.checkwx.com/taf/EDDF,EDDK,EDDB/decoded" 
    const key = "?x-api-key=ec3b8ab3213f4ab785458b22e7" 
    const [resultApi, setResultApi] = useState("")

    useEffect(()=>{

        fetch(url + key)
            .then(response => response.json())
            .then(data => setResultApi(JSON.stringify(data, null, "  ")) )

            

    },[])

    console.log(resultApi)
        return(

            <div>
                
                 <pre>{resultApi}</pre> 
                
            </div>
            )



}