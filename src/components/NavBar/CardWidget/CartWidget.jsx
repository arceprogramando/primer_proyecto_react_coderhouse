import React, { useContext } from 'react';
import './cartwidget.css'
import { CartContext } from '../../../contexts/ShoppingCartProvider';

const CartWidget = () => {
  const [cart, setCart] = useContext(CartContext);
  const quantity = cart.length;
  return (
    <div>
      <img src='/cart.svg'></img>
      <span>{quantity}</span>
    </div>
  )
}

export default CartWidget;




