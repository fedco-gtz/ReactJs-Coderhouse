import React, { createContext, useState } from "react";
import { toast } from 'react-toastify';

export const CartContext = createContext({
    cart: [],
    addItem: () => {},
    removeItem: () => {},
    clearCart: () => {},
    totalQuantity: () => {},
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }]);
        } else {
            toast.warning('El producto ya fue agregado al carrito', {
                theme: 'colored', autoClose: 1500
            });
        }
    };

    const removeItem = (itemId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== itemId));
        toast.error('El producto fue eliminado', {
            theme: 'colored', autoClose: 1500
        });
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId);
    };

    const totalQuantity = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;