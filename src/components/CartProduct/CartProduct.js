import React from 'react';
import './CartProduct.css';

const CartProduct = ({product}) => {
    return (
        <div className='cart-product'>
            <div className='details'>
            <img src={product.image} alt="" />
            <p>{product.name}</p>
            </div>
            <div className='quantity'>
            <p>{product.quantity}</p>
            </div>
        </div>
    );
};

export default CartProduct;