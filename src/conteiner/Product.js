import React, { useState, useEffect } from 'react';

function Product(props) {
    const [isloading, setIsLoading] = useState(true);
    const [fake, setFake] = useState([]);
    const [Search, setSearch] = useState("")
    const [filterData, setFilterData] = useState([]);

    const handlechange = (val) => {
        // console.log(val);
        setSearch(val);

        let fdata = fake.filter((v) => 
            v.text.toLowerCase().includes(val.toLowerCase()) ||
            v.author.toLowerCase().includes(val.toLowerCase())
        )
        console.log(fdata);
        setFilterData(fdata);
    }

    const getData = async () => {
        let response = await fetch('https://type.fit/api/quotes');
        // https://fakestoreapi.com/products
        // console.log(response);
          
        let data = await response.json();
        setFake(data);
        // console.log(data);
        setIsLoading(false);
    }    

    useEffect(() => {     
        // console.log("aa");
        getData()
    }, [])

    // console.log(fake, Search);

  
    let finalData = filterData.length > 0 ? filterData : fake;

    return (
        <div id='container'>
            {isloading ? <p>Loading....</p> :
                <>
                    <h1>Product</h1>
                    <input placeholder='Search....' onChange={(event) => handlechange(event.target.value)}></input>
                    {finalData.map((v) => {
                        return (
                            <div className='card'>                              
                                    {/* <img id='img' src={value.image} alt='' /> */}
                                    <h2>{v.text}</h2>
                                    <h2>{v.author}</h2>
                            </div>
                        )
                    })}
                </>
            }
        </div>
    );
}

export default Product;