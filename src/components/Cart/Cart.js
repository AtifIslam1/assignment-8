import React from 'react';
import CartProduct from '../CartProduct/CartProduct';
import './Cart.css';

const Cart = ({cart, reset, chooseOne}) => {
    return (
        <div className='cart'>
            <h2>Selected Books</h2>
            {
                cart.map(product => <CartProduct product={product} key={product.id}></CartProduct>)
            }
            <div className="btns">
            <button className='btn' onClick={chooseOne}>Choose 1 for me</button>
            <button className='btn' onClick={reset}>Reset</button>
            </div>
        </div>
    );
};

export default Cart;