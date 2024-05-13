import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { toast } from 'react-toastify';
import '../styles/ItemCount.css';
import '../styles/Cart.css';

function Cart() {
    const { cart, clearCart, totalQuantity, removeItem } = useContext(CartContext);

    const getTotalPrice = () => {
        let total = 0;
        cart.forEach(item => {
            total += item.price * item.quantity;
        });
        return total;
    };

    const clear = () => {
        clearCart();
        toast.error('Limpiando carrito', {
            theme: 'colored', autoClose: 1500
        });
    };

    const handleRemoveItem = (itemId) => {
        removeItem(itemId);
    };

    const total = getTotalPrice();

    if (totalQuantity() === 0) {
        return (
            <div className="counter">
                <h1 className="tittle">TODAVIA NO ELEGISTE TUS PROXIMAS ZAPATILLAS</h1>
                <h1 className="tittleMobile">TODAVIA NO ELEGISTE TUS ZAPATILLAS</h1>
                <div className="controls">
                    <Link className='backButton' to="/">IR AL CATÁLOGO</Link>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className="tittle">
                <h1>TUS ZAPATILLAS</h1>
            </div>

            <div className="cartDiv">
                {cart.map((item, index) => (
                    <div className="cartContainer" key={index}>
                        <h2 className="name">{item.name}</h2>
                        <h4 className="price">{item.quantity} unid. x ${item.price}</h4>
                        <h5 className="subtotal">$ {item.price * item.quantity}</h5>
                        <button className="trash" onClick={() => handleRemoveItem(item.id)}>ELIMINAR</button>
                    </div>
                ))}
            </div>

            <div className="cartFooter">
                <h2 className="total">TOTAL A PAGAR: ${total}</h2>
            </div>
            <div className="cartFooter">
                <Link className="trash" onClick={clear}>LIMPIAR CARRITO</Link>

                <Link className="checkout" to='/checkout'>FINALIZAR COMPRA</Link>
            </div>

            <div className="cartFooterMobile">
                <Link className="trash" onClick={clear}>LIMPIAR CARRITO</Link>
            </div>
            <div className="cartFooterMobile">
                <Link className="checkout" to='/checkout'>FINALIZAR COMPRA</Link>
            </div>

        </div>
    );
}

export default Cart;


