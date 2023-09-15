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
            v.category.toLowerCase().includes(val.toLowerCase()) ||
            v.price.toString().includes(val.toString())
        )
        console.log(fdata);
        setFilterData(fdata);
    }

    const getData = async () => {
        let response = await fetch('https://fakestoreapi.com/products');
        // console.log(response);
          
        let data = await response.json();
        setFake(data);
        console.log(data);
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
                                    <img id='img' src={v.image} alt='' />
                                    <h2>{v.category}</h2>
                                    <h2>{v.price}</h2>
                            </div>
                        )
                    })}
                </>
            }
        </div>
    );
}

export default Product;