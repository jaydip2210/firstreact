import React, { useEffect, useState } from 'react';

function Timerfun(props) {
    //1. constructor
    const [Time, setTime] = useState(new Date());

    const tick = () => {
        console.log("tick");
        setTime(new Date())
    }

    useEffect(() => {
        //3. componentdidmount //5. componentdidupdate
        
        const timer = setInterval(() => tick(), 1000);
        console.log("componentdidmount", "componentdidupdate");

        //6
        return () => {
            console.log("componentwillunmount");
            clearInterval(timer);
        }
    }, [Time])

    //Render  //4
    return (
        <div>
            <h1>Time Functional Based:</h1>
            <h2>{Time.toLocaleTimeString()}</h2>
        </div>
    );
}

export default Timerfun;