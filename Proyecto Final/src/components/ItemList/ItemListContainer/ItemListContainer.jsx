import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import '../../../styles/ItemListContainer.css'
import ItemList from '../ItemList';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsFromCategory } from '../../../actions';

const ItemListContainer = ({ gretting }) => {
    const [products, setProducts] = useState([])

    const params = useParams();

    useEffect(() => {
        if (params.categoryId) {
            getProductsFromCategory(params.categoryId)
                .then((resultado) => {
                    setProducts(resultado)
                })
                .catch((error) => {
                    toast.error('Error', {
                        theme: 'colored',autoClose: 1500
                    });
                });
        } else {
            getProducts()
                .then((resultado) => {
                    setProducts(resultado)
                })
                .catch((error) => {
                    toast.error('Error', {
                        theme: 'colored',autoClose: 1500
                    });
                });
        }
    }, [params.categoryId]);

    return (
        <div>
            <h1 className='tittleCatalogue'> CATÁLOGO </h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer;