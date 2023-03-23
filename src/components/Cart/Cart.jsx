import React, { useContext } from 'react';
import { CartContext } from '../../contexts/ShoppingCartProvider';

const Cart = () => {
    const [cart, setCart] = useContext(CartContext);

    return (
        <div>
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
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;