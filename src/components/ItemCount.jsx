import React from 'react'
import '../App.css';
import { useEffect, useState } from 'react';

const ItemCount = ({ stock = 0, initial = 1,  onAdd }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    },[]);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    
    const decrement = () => {
        if (count > initial+1) {
            setCount(count - 1);
        }
    }

    return (
        <div className='buttons'>
            <button className='buttonsAdd' variant="text" onClick={increment}>+</button>
            <div>{count}</div>
            <button className='buttonsAdd' variant="text" onClick={decrement}>-</button>
            {
                stock && count
                ? <button className='addCart' variant="contained" color="primary" onClick={() => onAdd(count)}>Add to Cart</button>
                : <button className='addCart' variant="contained" disabled>Add to Cart</button>
            }
            
        </div>
    );
}

export default ItemCount;