import React from 'react';
import './Products.css';

const Products = ({ product, addToCart}) => {
    const { name, image, price } = product;
    return (
        <div className='product'>
            <img src={image} alt="" />
            <div className="details">
            <p><strong>Name: </strong>{name}</p>
            <p><strong>Price: </strong>{price}</p>
            </div>
            <button className='btn' onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default Products;