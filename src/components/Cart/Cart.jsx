import './cart.css'

import React, { useContext } from 'react';
import { CartContext } from '../../contexts/ShoppingCartProvider';

const Cart = () => {
    const [cart, setCart] = useContext(CartContext);

    const removeItemFromCart = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
    };
    return (
        < >
            <div className='main container'>

                <h2>Carrito de compras</h2>
                <ul>
                    {cart.map(item => (
                        <li key={item.id}>
                            <img src={item.url} alt={item.nombre} />
                            <div>
                                <h3>{item.nombre}</h3>
                                <p>Cantidad: {item.quantity}</p>
                                <p>Precio unitario: ${item.precio}</p>
                            </div>
                            <button onClick={() => removeItemFromCart(item.id)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Cart;