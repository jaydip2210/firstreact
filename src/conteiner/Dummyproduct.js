import React, { useEffect, useState } from 'react';

function Dummyproduct(props) {
    const [product, setProduct] = useState([]);
    const [isloading, setIsLoading] = useState(true);
    const [click, setClick] = useState("");
    const [filterData, setFilterData] = useState([]);

    const handleClick = (val) => {
        setClick(val)
        console.log(val);

        let clickData = product.filter((v,i) => 
           v.category
        )

        setFilterData(clickData);
        console.log(clickData);

    }

    const getdata = async () => {
        let response = await fetch('https://dummyjson.com/products')
        // console.log(response);

        let data = await response.json();
        // console.log(data.products);

        setProduct(data.products);
        setIsLoading(false);
    }

    useEffect(() => {
        getdata();
    }, [])


    return (
        <div className='container'>
        {isloading ? <p>Loading....</p> :
             <>
                 <h1>Product</h1>
                 <button onClick={(event) => handleClick('smartphones')}>smartphones</button>
                 <button onClick={(event) => handleClick('laptops')}>laptops</button>
                 <button onClick={(event) => handleClick('fragrances')}>fragrances</button>
                 <button onClick={(event) => handleClick('skincare')}>skincare</button>
                 <button onClick={(event) => handleClick('groceries')}>groceries</button>
                 <button onClick={(event) => handleClick('home-decoration')}>"home-decoration</button>
                 <div className='row'>
                     {product.map((v, i) => {
                         return (
                             <div className='col-md-4 border'>
                                 <img id='img' src={v.images[0]} alt='' />
                                <h2>{v.category}</h2>
                                <h2>{v.price}</h2>
                             </div>
                         )
                     })}
                 </div>
             </>
        }
     </div>
    );
}

export default Dummyproduct;