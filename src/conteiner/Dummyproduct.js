import React, { useEffect, useState } from 'react';

function Dummyproduct(props) {
    const [product, setProduct] = useState([]);
    const [isloading, setIsLoading] = useState(true);
    const [click, setClick] = useState("");
    const [filterData, setFilterData] = useState([]);
    const [down, setDown] = useState("");

    const handlechange = (val) => {
        setDown(val);
        console.log(val);

        let sortData = [...product].sort((a,b) => {
            if(val === 'lowtohigh') {
                return a.price > b.price ? 1 : -1;
            } else if(val === 'hightolow') {
                return a.price > b.price ? -1 : 1;
            }
        })

        setFilterData(sortData);

        // let sort = filterData.sort()
        // console.log(sort);

        // let sort1 = filterData.sort().reverse()
        // console.log(sort1);

        // const sort2 = filterData.sort((a, b) => a - b)
        // console.log(sort2)

        // const sort3 = filterData.sort((a, b) => b - a)
        // console.log(sort3)

    }

    const handleClick = (val) => {
        setClick(val)
        console.log(val);

        let clickData = product.filter((v, i) =>
            v.category.toLowerCase().includes(val.toLowerCase())
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

    let finalData = filterData.length > 0 ? filterData : product;


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
                    <br></br>
                    <br></br>

                    <select name="" id="" onChange={(event) => handlechange(event.target.value)}>
                        <option value="0">--select--</option>
                        <option value="lowtohigh">A To Z</option>
                        <option value="hightolow">Z To A</option>
                        <option value="">Low To High</option>
                        <option value="">High To Low</option>
                    </select>
                    <br></br>
                    <br></br>


                    <div className='row'>
                        {finalData.map((v, i) => {
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