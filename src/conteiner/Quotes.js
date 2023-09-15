import React, { useEffect, useState } from 'react';

function Quotes(props) {
    const [isloading, setIsLoading] = useState(true); //usestate ma sarvat ni value ave/ initilize thay
    const [qdata, setQdata] = useState([]);
    const [Search, setSearch] = useState("");
    const [filterData, setFilterData] = useState([]);;
    // const [index, setIndex] = useState(0);

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

    const handlechange = (val) => {
        setSearch(val);

        let fdata = qdata.filter((v) => v.text.toLowerCase().includes(val.toLowerCase()) ||
        v.author.toLowerCase().includes(val.toLowerCase()))

        setFilterData(fdata);
    }

    let finalData = filterData.length > 0 ? filterData : qdata;

    // const handlePrev = () => {
    //     let new_index = index - 1
    //     setIndex(new_index)
    // }

    // const handleNext = () => {
    //     let new_index = index + 1
    //     setIndex(new_index)
    // }

    return (
        <div className='container'>
           {isloading ? <p>Loading....</p> :
                <>
                    <h1>Quotes</h1>
                    <input placeholder='Search' onChange={(event) => handlechange(event.target.value)}></input>
                    <div className='row'>
                        {finalData.map((v) => {
                            return (
                                <div className='col-md-4 border'>
                                    <h2>{v.text}</h2>
                                    <p>{v.author}</p>
                                </div>
                            )
                        })}
                    </div>
                </>
           }
        </div>
    );
}

export default Quotes;