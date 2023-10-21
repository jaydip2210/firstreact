import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/action/counter.action';

function Counter(props) {
    const c1 = useSelector(state => state.counter)
    const dispatch = useDispatch()

    const handleIncrement = () => {
        dispatch(increment());
    }

    const handleDecrement = () => {
        dispatch(decrement());
    }

    return (
        <div>
            <button onClick={handleIncrement}>+</button>
            {c1.count}
            <button onClick={handleDecrement}>-</button>
        </div>
    );
}

export default Counter;