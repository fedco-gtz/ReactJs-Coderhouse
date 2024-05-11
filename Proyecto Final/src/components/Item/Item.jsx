import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Item.css'

const Item = ({ id, collection, name, description, img, price, stock }) => {

    return (

        <ul className='list'>
            <li className='product'>
                <li>{collection}</li>
                <li>{name}</li>
                <li>{description}</li>
                <li><img src={img} alt={name} /></li>
                <li>Precio: ${price}</li>
                <li>Stock disponible: {stock}</li>
                <Link className="productButton" to={`/item/${id}`}>VER DETALLE</Link>
            </li>
        </ul>
    );
}

export default Item;
