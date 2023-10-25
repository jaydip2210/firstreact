import React, { useEffect, useState } from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { addToCart } from './redux/action/cart.action';
import { useDispatch, useSelector } from 'react-redux';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));


function Dummyproduct(props) {
    const [product, setProduct] = useState([]);
    const [isloading, setIsLoading] = useState(true);
    const [click, setClick] = useState("");
    const [filterData, setFilterData] = useState([]);
    const [down, setDown] = useState("");
    const [Search, setSearch] = useState("");
    const [sort, setSort] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [category, setCategory] = useState([]);
    const [selectCat, setSelectCat] = useState('');

    const dispatch = useDispatch()


    const cart = useSelector(state => state.cart)
    console.log(cart);


    const handlesearchsort = () => {
        console.log("ok", selectCat);

        let fdata = product.filter((v) =>
            v.title.toLowerCase().includes(Search.toLowerCase()) ||
            v.price.toString().includes(Search.toString())
        )

        if (selectCat !== '') {
            fdata = fdata.filter((d) => d.category === selectCat);
        }

        console.log(fdata);

        fdata = fdata.sort((a, b) => {
            if (sort === 'lh') {
                return a.price - b.price;
            } else if (sort === 'hl') {
                return b.price - a.price;
            } else if (sort === 'az') {
                return a.title.localeCompare(b.title);
            } else if (sort === 'za') {
                return b.title.localeCompare(a.title);
            }
        })

        return fdata;
    }

    // const handleClick = (val) => {
    //     setClick(val)
    //     console.log(val);

    //     let clickData = product.filter((v, i) =>
    //         v.category.toLowerCase().includes(val.toLowerCase())
    //     )

    //     setFilterData(clickData);
    //     console.log(clickData);

    //     setIsOpen(!isOpen);

    // }

    const getdata = async () => {
        let response = await fetch('https://dummyjson.com/products')
        // console.log(response);

        let data = await response.json();
        // console.log(data.products);

        let uniqecat = [];
        product.map((p) => {
            if (!uniqecat.includes(p.category)) {
                uniqecat.push(p.category);
            }
        });
        setCategory(uniqecat);

        setProduct(data.products);
        setIsLoading(false);

        // setCategory(uniqecat);
    }

    const handleCart = (id) => {
        // console.log("clickButton");
        console.log(id);

        dispatch(addToCart(id))
    }


    useEffect(() => {
        getdata();
    }, [])

    // let finalData = filterData.length > 0 ? filterData : product;
    let finalData = handlesearchsort();
    return (
        <div className='container'>
            {isloading ? <p>Loading....</p> :
                <>
                    <h1>Product</h1>

                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={0} color="secondary">
                            <ShoppingCartIcon />
                        </StyledBadge>
                    </IconButton>

                    <input placeholder='Search' onChange={(event) => setSearch(event.target.value)}></input>
                    <br></br>
                    <div>
                        {category.map((c) => {
                            <button>{c}</button>
                        })}
                    </div>
                    <br></br>
                    {/* <button onClick={(event) => handleClick('smartphones')} className={classNames('description', {'description-active' : isOpen, 'green-active' : isOpen})}>smartphones</button>
                    <button onClick={(event) => handleClick('laptops')} className={classNames('description', {'description-active' : isOpen, 'green-active' : isOpen})}>laptops</button>
                    <button onClick={(event) => handleClick('fragrances')} className={classNames('description', {'description-active' : isOpen, 'green-active' : isOpen})}>fragrances</button>
                    <button onClick={(event) => handleClick('skincare')} className={classNames('description', {'description-active' : isOpen, 'green-active' : isOpen})}>skincare</button>
                    <button onClick={(event) => handleClick('groceries')} className={classNames('description', {'description-active' : isOpen, 'green-active' : isOpen})}>groceries</button>
                    <button onClick={(event) => handleClick('home-decoration')} className={classNames('description', {'description-active' : isOpen, 'green-active' : isOpen})}>"home-decoration</button>
                    <br></br>
                    <br></br> */}

                    {/* <select name="" id="" onChange={(event) => handlesearchsort(event.target.value)}> */}
                    <select name="" id="" onChange={(event) => setSort(event.target.value)}>
                        <option value="0">--select--</option>
                        <option value="az">A To Z</option>
                        <option value="za">Z To A</option>
                        <option value="lh">Low To High</option>
                        <option value="hl">High To Low</option>
                    </select>
                    <br></br>
                    <br></br>
                    {/* <div className='row'>
                        {
                            category.map((c) => {
                                return(
                                    <button onClick={() => setSelectCat(c)}>{c}</button>
                                )
                            })
                        }
                    </div> */}

                    <div className='row'>
                        {finalData.map((v, i) => {
                            return (
                                <div className='col-md-4 border'>
                                    <img id='img' src={v.images[0]} alt='' />
                                    <h2>{v.title}</h2>
                                    <h2>{v.price}</h2>
                                    <button onClick={() => handleCart(v.id)}>Add To Cart</button>
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