import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
    const first10 = fakeData.slice(0,10)
    const [products, setProducts]= useState(first10)

    const[cart, setCart]= useState([])
    const handleAddProduct =(item)=>{
        const newCart= [...cart, item]
        setCart(newCart)

    }
    return (
        <div className='shop-container'>
            <div className="product-container">
            
                {
                    products.map(pd => <Product product={pd}
                    
                        addProduct={handleAddProduct}
                    
                    ></Product>)
                }
            </div>
                <div className="cart-container">
                   <Cart cart={cart}></Cart> 
                </div>
        </div>
    );
};

export default Shop;