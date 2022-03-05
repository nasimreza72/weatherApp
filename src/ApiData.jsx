import { createContext, useEffect, useRef, useState, useContext } from "react"

//const arrayOfAirports = ["EDDF",EDDK,EDDB,EDDC,EDDW,EDLW,EDDL,EDDE,EDFH,EDDH,EDDV,EDSB,EDVK,EDDP,EDFM,EDDM,EDDG,EDDN,EDDS] 

export const LocaleContext = createContext(null)

export default function ApiData(props){
    const url = "https://api.checkwx.com/metar/EDDF/decoded" 
    const key = "?x-api-key=ec3b8ab3213f4ab785458b22e7" 
    const [resultApi, setResultApi] = useState("some data")

    useEffect(()=>{

        fetch(url + key)
            .then(response => response.json())
            .then(data => setResultApi(JSON.stringify(data, null, "  ")) )         

    },[])

    console.log(resultApi)
        return(
            
            <LocaleContext.Provider value= {[resultApi, setResultApi]}>
                <p>Hi from Api</p>
                {props.children}
            </LocaleContext.Provider>

         // <div>
        //      <pre>{resultApi}</pre> 
       // </div>
            )
}

export function useLocaleContext (){
    return useContext(LocaleContext)
}