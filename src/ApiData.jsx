import { createContext, useEffect, useRef, useState, useContext } from "react"

//const arrayOfAirports = ["EDDF",EDDK,EDDB,EDDC,EDDW,EDLW,EDDL,EDDE,EDFH,EDDH,EDDV,EDSB,EDVK,EDDP,EDFM,EDDM,EDDG,EDDN,EDDS] 

export const LocaleContext = createContext(null)

export default function ApiData(props){
    const [city, setCity] = useState("EDDB")
    const urlTaf = `https://api.checkwx.com/taf/${city}`
    const urlMetar = `https://api.checkwx.com/metar/${city}` 
    const key = "?x-api-key=ec3b8ab3213f4ab785458b22e7" 
    const [resultTaf, setResultTaf] = useState("")
    const [resultMetar, setResultMetar] = useState("")

    // const myInput = useRef()

    // function handleSubmit(e){
    //     e.preventDefault()
    //     setCity(myInput.current.value)
    // }

    useEffect(()=>{
        fetch(urlTaf + key)
            .then(response => response.json())
            .then(data => setResultTaf(JSON.stringify(data, null, "  ")) ) 
    },[])
    useEffect(()=>{
        fetch(urlMetar + key)
        .then(response => response.json())
        .then(data => setResultMetar(JSON.stringify(data, null, "  ")) ) 
    },[])
    console.log(resultMetar);
    console.log(resultTaf)
        return(
            <div className="api-div">
                {/* <div className="input-field">
                    <form onSubmit={handleSubmit}>
                        <input ref={myInput} type="text" />
                        <button>Push</button>
                    </form>
                </div> */}
                
                <LocaleContext.Provider value= {[resultTaf, setResultTaf, city, setCity, resultMetar, setResultMetar]}>
                
                    {props.children}
                
                </LocaleContext.Provider>
            </div>
            )
}

export function useLocaleContext (){
    return useContext(LocaleContext)
}