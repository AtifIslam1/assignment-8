import React from 'react';
import './CartProduct.css';

const CartProduct = ({product}) => {
    return (
        <div className='cart-product'>
            <img src={product.image} alt="" />
            <p>{product.name}</p>
            <p className='quantity'>{product.quantity}</p>
        </div>
    );
};

export default CartProduct;