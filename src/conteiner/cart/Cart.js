import React, { useEffect, useState } from 'react';
// import { decrementCart, deleteCart, incrementCart } from '../../redux/action/cart.action';
import DeleteIcon from '@mui/icons-material/Delete';
import { decrementCart, deleteCart, incrementCart } from '../redux/action/cart.action';
import { useDispatch, useSelector } from 'react-redux';

function Cart(props) {
// const [productData, setProductData] = useState([])
const [product, setProduct] = useState([]);


const getProduct = async () => {
    let response = await fetch('https://dummyjson.com/products')
    // console.log(response);

    let data = await response.json()
    // console.log(data);
    console.log(data.products);

    setProduct(data.products)
    // setIsLoading(false)

}

useEffect(() => {
    // setIsLoading(true)

    getProduct()
}, [])

console.log(product);

const cart = useSelector(state => state.cart)
console.log(cart);

const cartData = cart.cart.map((v) => {
    let pro = product.find((p) => p.id === v.id)

    let fData = { ...pro, qty: v.qty }
    return fData
})
console.log(cartData);


const dispatch = useDispatch()

const handleInc = (id) => {
    // console.log(id);
    dispatch(incrementCart(id))
}

const handleDec = (id) => {
    console.log(id);
    dispatch(decrementCart(id))
}

let total = cartData.reduce((acc, v) => acc + v.price * v.qty, 0)
console.log(total);


const handleDelete = (id) => {
    dispatch(deleteCart(id))
}

    return (
        <div>

            <div className="shopping-cart">
                <div className="title">
                    Shopping Bag
                </div>

                {
                    cartData.map((v) => {
                        return (
                            <div className="item">
                                <div className="buttons">
                                    <span className="delete-btn" />
                                    <span className="like-btn" />
                                </div>
                                <div className="image">
                                    <img src="item-1.png" alt />
                                </div>
                                <div className="description">
                                    <span>{v.title}</span>
                                </div>
                                <div className="quantity">
                                    <button className="plus-btn" type="button" name="button" onClick={() => handleInc(v.id)}>
                                        +
                                    </button>
                                    <span>{v.qty}</span>
                                    <button className="minus-btn" type="button" name="button" onClick={() => handleDec(v.id)}>
                                        -
                                    </button>
                                </div>
                                <div className="total-price">{v.price * v.qty}</div>

                                <div className='delete'>
                                    <DeleteIcon onClick={() => handleDelete(v.id)} />
                                </div>
                            </div>
                        )

                    })
                }

            </div>
            <>
                <h4 className='span'>Total:{total}</h4>
            </>

        </div>
    );
}

export default Cart;