import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = (props) => {

    const [ cart, setCart ] = useState([]);

    const addToCart = (product, qty) => {
        if( cart.some( el =>el.id === product.id ) ){ // El producto SI existe en el carrito
            const newCart = cart.map( el => {
                if(el.id === product.id){
                    el.qty = el.qty + qty;
                }
                return el;
            });
            setCart(newCart);
        }else{ //El producto no existe en el carrito de compras
            setCart([...cart,{ ...product,qty }]);
        }
    }

    const deleteCart = () => {
        setCart([]);
    }

    const deleteProductById = (id) => {
        const newCart = cart.filter( el => el.id !== id );
        setCart(newCart);
    }

    return(
        <CartContext.Provider
            value={{ //aca paso toda la informacion que yo quiero que este disponible en el context
                cart,
                addToCart,
                deleteCart,
                deleteProductById
            }}
        >
            { props.children }       
        </CartContext.Provider>
    )
}

export default CartProvider;