import React, { useEffect, useState } from 'react';

function Quotes(props) {
    const [isloading, setIsLoading] = useState(true); //usestate ma sarvat ni value ave/ initilize thay
    const [qdata, setQdata] = useState([]);
    const [index, setIndex] = useState(0)

    const getData = async () => {
        let response = await fetch('https://type.fit/api/quotes')
        console.log(response);

        let data = await response.json();
        // console.log(data);

        setQdata(data)
        setIsLoading(false)
    }

    useEffect(() => {
        // console.log("111");
        getData();
    }, [])

    const handlePrev = () => {
        let new_index = index - 1
        setIndex(new_index)
    }

    const handleNext = () => {
        let new_index = index + 1
        setIndex(new_index)
    }

    return (
        <div>
            {isloading ? <p>Loading....</p> :
                <>
                    <p>{qdata[index].text}</p>
                    <p>--{qdata[index].author}</p>
                    <button onClick={handlePrev} disabled={index === 0 ? true : false}> Previous</button>
                    <button onClick={handleNext} disabled={index === qdata.length-1 ? true : false}>Next</button>
                </>
            }
        </div>
    );
}

export default Quotes;