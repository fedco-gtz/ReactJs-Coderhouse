import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import '../../../styles/ItemCount.css'

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if  (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const handleAdd = () => {
        onAdd(quantity);
        toast.success('Producto agregado al carrito', {
            theme:'colored', autoClose: 1500
        });
    };

    return(
        <div className='counter'>
            <div className='controls'>
                <button className='button' onClick={decrement}> - </button>
                <h4 className='number'>{quantity}</h4>
                <button className='button' onClick={increment}> + </button>
            </div>
            <div className='controls'> 
                <button className='button' onClick={handleAdd} disabled={!stock}> AGREGAR </button>
            </div>
        </div>
    )
}

export default ItemCount
