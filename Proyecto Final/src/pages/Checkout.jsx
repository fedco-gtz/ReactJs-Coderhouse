import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { createSale } from '../actions';
import { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import '../styles/Checkout.css';
import Sale from '../components/Sale/Sale'

function Checkout() {
    const { cart } = useContext(CartContext);
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [confirmarEmail, setConfirmarEmail] = useState('');
    const [mostrarExito, setMostrarExito] = useState(false);
    const [detalleVenta, setDetalleVenta] = useState(null);
    const [fechaCompra, setFechaCompra] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!nombre || !apellido || !telefono || !email || !confirmarEmail) {
            toast.warning('Por favor complete todos los campos', { theme: 'colored', autoClose: 1500 });
            return;
        }
        if (email !== confirmarEmail) {
            toast.error('Los correos electrónicos no coinciden', { theme: 'colored', autoClose: 1500 });
            return;
        }
        toast.loading('Procesando compra ...', { theme: 'colored', autoClose: 1500 });
        const usuario = {
            nombre,
            apellido,
            telefono,
            email
        };
        try {
            const detalle = await createSale(usuario, cart);
            setDetalleVenta(detalle);
            setFechaCompra(new Date());
            toast.dismiss();
            toast.success('Compra realizada con éxito', { theme: 'colored', autoClose: 1500 });
            setMostrarExito(true);
        } catch (error) {
            toast.dismiss();
            toast.error('Error al procesar la compra', { theme: 'colored', autoClose: 1500 });
        }
    };

    return (
        <>
            {mostrarExito ? (
                <Sale detalleVenta={detalleVenta} fechaCompra={fechaCompra} />
            ) : (
                <>
                    <h1 className='tittle'>FINALIZAR COMPRA</h1>
                    <form className='form' onSubmit={handleSubmit}>
                        <div className='div'>
                            <label className='label'>
                                NOMBRE <input type="text" placeholder='Ingrese su nombre' value={nombre} onChange={(e) => setNombre(e.target.value)} />
                            </label>
                        </div>
                        <div className='div'>
                            <label className='label'>
                                APELLIDO <input type="text" placeholder='Ingrese su apellido' value={apellido} onChange={(e) => setApellido(e.target.value)} />
                            </label>
                        </div>
                        <div className='div'>
                            <label className='label'>
                                TELÉFONO <input type="text" placeholder='Ingrese su teléfono' value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                            </label>
                        </div>
                        <div className='div'>
                            <label className='label'>
                                E-MAIL <input type="email" placeholder='Ingrese su correo electrónico' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </label>
                        </div>
                        <div className='div'>
                            <label className='label'>
                                CONFIRMAR E-MAIL <input type="email" placeholder='Verifique su correo electrónico' value={confirmarEmail} onChange={(e) => setConfirmarEmail(e.target.value)} />
                            </label>
                        </div>
                        <button className='saleButton' type="submit" >COMPRAR</button>
                    </form>
                </>
            )}
        </>
    );
}

export default Checkout;