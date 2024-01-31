// Code Keypad Component Here
import React from "react";

function Keypad (event){
    // function handleChange(){
    //     console.log('Entering password...')
    // }
    // <input type="password" onChange={handleChange}/> 

    return (
        <div>
            <input type="password" onChange={() => console.log('Entering password...')}/> 
        </div>
    )
}

export default Keypad;