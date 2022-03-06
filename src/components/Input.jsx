import { useRef } from "react"
import { useLocaleContext } from "../ApiData.jsx"

export default function Input(){
    const [setCity] = useLocaleContext()
    const myInput = useRef()
    
    function handleSubmit(e){
        e.preventDefault()
        setCity(myInput.current.value)
    }

    return(
        <div className="input-section">
            <p>Hi from input</p>
            <form onSubmit={handleSubmit}> 
            <input ref={myInput} type="text" />
            <button> Push </button> 
        </form>
        </div>
        
    )
}