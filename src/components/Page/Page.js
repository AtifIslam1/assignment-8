import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Page.css';

const Page = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const addToCart = (selectedProduct) => {
        let newCart = [];
        const exist = cart.find(product => product.id === selectedProduct.id);
        if (exist) {
            selectedProduct.quantity = JSON.parse(selectedProduct.quantity) + 1;
            newCart = [...cart]
        }
        else {
            JSON.parse(selectedProduct.quantity = 1)
            newCart = [...cart, selectedProduct];
        }
        setCart(newCart);
    }

    const reset = () => {
        let newcart = [];
        setCart(newcart);
    }

    const chooseOne = () => {
        if (cart.length === 0) {
            // added alert cuz i didn't had much time.....sorry
            alert('Add Something Please')
        }
        else {
            const choosen = [Math.floor(Math.random(1, 5) * cart.length)]
            let newCart = [cart[choosen]]
            setCart(newCart)
        }
    }

    return (
        <div className='page'>
            <div className='product-container'>
                {
                    products.map(product => <Products
                        product={product}
                        key={product.id}
                        addToCart={addToCart}
                    ></Products>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart} reset={reset} chooseOne={chooseOne}></Cart>
            </div>
        </div>
    );
};

export default Page;