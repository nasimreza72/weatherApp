import { useState, useRef } from "react"


function Input(){
    const [cityName, setCityName] = useState("Berlin")
    const input = useRef()
    

    const submitHandler = (e)=>{
        e.preventDefault()
        setCityName(input.current.value)
        input.current.value = ""
    }
    
    return (

        <div>
            <form onSubmit={submitHandler}>
                <input type="text" ref={input}   />
                <button onClick={submitHandler}>Submit</button>
            </form>
        </div>
        )


}
export default Input