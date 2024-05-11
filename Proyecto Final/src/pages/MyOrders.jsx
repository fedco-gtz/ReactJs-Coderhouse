import React, { useState } from 'react';
import { searchOrder } from '../actions';
import { toast } from 'react-toastify';
import '../styles/MyOrders.css';
import { Link } from 'react-router-dom';

function MyOrders() {
    const [orderId, setOrderId] = useState('');
    const [orderDetail, setOrderDetail] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [logs, setLogs] = useState([]);

    const handleSearchOrder = async () => {
        if (orderId === '') {
            toast.warning('Por favor ingrese un ID válido', { theme: 'colored', autoClose: 1500 });
            return;
        }

        toast.info('Buscando orden de compra', { autoClose: 1500 });
        setError(null);

        try {
            const orderDetail = await searchOrder(orderId);
            setOrderDetail(orderDetail);
            setOrderId('');
            logMessage(` `);
        } catch (error) {
            console.error(error);
            setError('Error al buscar la orden');
        } finally {
            setLoading(false);
        }
    };

    const logMessage = (message) => {
        setLogs((prevLogs) => [...prevLogs, message]);
    };

    return (
        <>
            <h1 className='tittle'>BUSCAR COMPRA</h1>

            <form className='form'>
                <label className='label' htmlFor="orderId">ID DE ORDEN</label>
                <input type="text" id="orderId" name="orderId" placeholder="Ingrese ID de Orden" value={orderId} onChange={(e) => setOrderId(e.target.value)} />
            </form>
            <button className='searchButton' onClick={handleSearchOrder} disabled={loading}>BUSCAR</button>

            {error && <p>{error}</p>}

            {orderDetail && (
                <div className='searchDiv'>
                    <h3 className='searchTittle'>ORDEN DE COMPRA ID</h3>
                    <h2 className='orderId'>{orderDetail.id}</h2>
                    <h2 className='order'>DATOS DEL COMPRADOR</h2>
                    <p className='fact'>Nombre y apellido:</p> {orderDetail.usuario.nombre}  {orderDetail.usuario.apellido}
                    <p className='fact'>Teléfono:</p> {orderDetail.usuario.telefono}
                    <p className='fact'>E-mail:</p> {orderDetail.usuario.email}
                    <h2 className='order'>DETALLE DE LA COMPRA</h2>
                    {orderDetail.items.map((item, index) => (
                        <div className='orderItem' key={index}>
                            <p className='factItem'>{item.name.toUpperCase()}</p>
                            <p className='factPrice'> {item.quantity} unid. x ${item.price}</p>
                            <p className='factPriceParcial'> $ {item.price * item.quantity}</p>
                        </div>
                    ))}
                    <h2 className='orderPrice'>TOTAL DE LA COMPRA</h2>
                    <p className='price'> $ {orderDetail.items.reduce((total, item) => total + (item.price * item.quantity), 0)}</p>
                </div>
            )}

            <div className="linkContainer">
            <Link className='linkButton' to="/category/airForce">AIR FORCE</Link>
            <Link className='linkButton' to="/category/airMax">AIR MAX</Link>
            <Link className='linkButton' to="/category/other/dunk">DUNK</Link>
            <Link className='linkButton' to="/category/other/infinityRun">INFINITY RUN</Link>
            <Link className='linkButton' to="/category/jordan">JORDAN</Link>
            <Link className='linkButton' to="/category/other/metcon">METCON</Link>
            <Link className='linkButton' to="/category/other/pegasus">PEGASUS</Link>
            </div>
        </>
    );
}

export default MyOrders;