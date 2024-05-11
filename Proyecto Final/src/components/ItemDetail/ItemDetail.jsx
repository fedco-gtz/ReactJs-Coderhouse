import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../Item/ItemCount/ItemCount';
import { CartContext } from '../../context/cartContext';
import '../../styles/ItemCount.css';
import '../../styles/ItemDetail.css';

const ItemDetail = ({ id, collection, name, description, img, img1, price, stock }) => {

  const [quantityAdded, setQuantityAdded] = useState(0)

  const { addItem } = useContext(CartContext)

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)

    const item = {
      id, name, price, quantity
    }

    addItem(item, quantity)
  }

  return (
    <>
      <div className='table'>
        <table>
          <tbody>
            <tr className='collection'>
              <td rowSpan={6}><img src={img} alt={name} /></td>
              <td rowSpan={6}><img src={img1} alt={name} /></td>
              <td className='column'>{collection}</td>
            </tr>
            <tr className='column'>
              <td className='name'>{name}</td>
            </tr>
            <tr className='column'>
              <td className='description'>{description}</td>
            </tr>
            <tr className='column'>
              <td className='price'>${price}</td>
            </tr>
            <tr className='column'>
              <td>Stock disponible: {stock}</td>
            </tr>
            <tr>
              <td>

                {
                  quantityAdded > 0 ? (
                    <Link to='/cart' className='cartButton'>IR AL CARRITO</Link>
                  ) : (<ItemCount initial={1} stock={stock} onAdd={(handleOnAdd)} />)
                }

              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='tableMobile'>
        <table>
          <tr rowspan="4">
            <td><img src={img} alt={name} /> <img src={img1} alt={name} /></td>
          </tr>
          <tr>
            <td className='collection'>{collection}</td>
          </tr>
          <tr>
            <td className='name'>{name}</td>
          </tr>
          <tr>
            <td className='description'>{description}</td>
          </tr>
          <tr>
            <td className='price'>${price}</td>
          </tr>
          <tr>
            <td>Stock disponible: {stock}</td>
          </tr>
          <tr>
            <td>

              {
                quantityAdded > 0 ? (
                  <div className='space'>
                    <Link to='/cart' className='cartButton'>IR AL CARRITO</Link>
                  </div>
                ) : (<ItemCount initial={1} stock={stock} onAdd={(handleOnAdd)} />)
              }


            </td>
          </tr>
        </table>
      </div>
      <div className='counter'>
        <div className='controls'>
          <Link className='backButton' to="/">VOLVER AL CATÁLOGO</Link>
        </div>
      </div>
    </>
  );
}

export default ItemDetail;
