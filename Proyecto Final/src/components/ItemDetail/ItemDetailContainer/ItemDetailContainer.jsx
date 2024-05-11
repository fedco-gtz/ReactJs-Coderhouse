import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail';
import { getProductDetail } from '../../../actions';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { itemId } = useParams(); 

    useEffect(() => {
        
        getProductDetail(itemId)
        .then((consult)=>{
            setProduct(consult)
        })

    }, [itemId]); 

    return (
        <div>
            {<ItemDetail {...product} />}
        </div>
    );
}

export default ItemDetailContainer;
