import React, { useContext, useEffect } from 'react';
import { CartContext } from "../../context/cartContext";
import { Link } from 'react-router-dom';
import '../../styles/Sale.css';

const Sale = ({ detalleVenta, fechaCompra }) => {
  const { clearCart } = useContext(CartContext);

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div>
      <h1 className='tittle'>ORDEN GENERADA EXITOSAMENTE</h1>
      {detalleVenta && (
        <div className='saleDetail'>
          <div>
            <h3 className='infoSale'>NÚMERO DEL PEDIDO</h3> 
            <h2 className='infoDetail'>{detalleVenta}</h2>
            <h3 className='infoSale'>REALIZADO EL</h3> 
            <h2 className='infoDate'>{fechaCompra ? fechaCompra.toLocaleString() : 'Cargando...'}</h2>
          </div>
        </div>
      )}
      <Link to='/myOrders' className='saleConfirm'>IR A MIS PEDIDOS</Link>
    </div>
  );
};

export default Sale;