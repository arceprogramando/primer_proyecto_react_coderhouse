import React, { useContext } from 'react';
import { CartContext } from '../contexts/ShoppingCartProvider';

const CartWidget = () => {
  const [cart, setCart] = useContext(CartContext);
  const quantity = cart.length;
  
  return (
    <div className='flex'>
      <img src='/cart.svg' className='w-8'></img>
      <span>{quantity}</span>
    </div>
  )
}

export default CartWidget;




