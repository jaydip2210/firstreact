import React from "react"; 

export default function Functional(Props) {
    const red = () => {
        alert("red function called")
    }
    return(
        <h1 onClick={red}>{Props.text}</h1>
    )    
}