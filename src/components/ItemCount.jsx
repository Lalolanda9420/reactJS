import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Button from 'react-bootstrap/Button';
const ItemCount = ({ product, stock }) => {

    const [count, setCount] = useState(1);
    const cartContext = useContext(CartContext);
    const { addToCart } = cartContext;

    const addCount = (num) => {
        setCount(count + num)
    }

    return (
        <div>
            <Button
                variant='primary'
                onClick={() => { addCount(-1) }}
                disabled={ count <= 1 }
            >-</Button>
            <span>{count}</span>
            <Button
                variant='primary'
                onClick={() => { addCount(1) }}
                disabled={ count >= stock }
            >+</Button>

            <Button variant="success" onClick={() => {addToCart(product,count)} }>Add to cart</Button>
        </div>
    )
}

export default ItemCount