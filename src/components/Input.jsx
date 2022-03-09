import { useState, useRef } from "react"
import {useContext} from "react";
import { userContext } from "../Context/Context.jsx";


function Input(props){

    const { setCityName} =useContext(userContext)

    
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