import React, { useState } from 'react';

function CounterFun(props) {
    const [Counter, setCounter] = useState(0);


    const handleInc = () => {
        setCounter(Counter + 1)
    }

    const handleDec = () => {
        setCounter(Counter - 1)
    }

    return (
        <div>
            <h1>Counter Function Based Component</h1>
            <button onClick={handleInc}>+</button>
            {Counter}
            <button onClick={handleDec}>-</button>
        </div>
    );
}

export default CounterFun;