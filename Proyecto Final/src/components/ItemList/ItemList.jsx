import React from 'react';
import Item from '../Item/Item';
import '../../styles/Item.css'


const ItemList = ({products}) => {

    return (
        <div className='list'>
           {products.map(prod => <Item key={prod.id} {...prod} />)} 
        </div>
    )
}

export default ItemList;