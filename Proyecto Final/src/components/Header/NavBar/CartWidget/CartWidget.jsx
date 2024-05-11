import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../../../context/cartContext';
import '../../../../styles/CartWidget.css'
import cart from '../../../../images/cart.png';

function CartWidget() {
    const { totalQuantity } = useContext(CartContext)

    return (
        <div className='cartWidget'>
            <img src={cart} alt="Carrito" />
            <span className='cardNumber'> {totalQuantity()} </span>
        </div>
    );
}

export default CartWidget;
