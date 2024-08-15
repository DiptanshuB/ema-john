import React from "react";
import "./Product.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Product = (data) => {
  console.log(data);
  const { img, name, seller, price, stock } = data.product;
  return (
    <div className="profuct">
      <div>
        <img src={data.product.img} alt="" />
      </div>
      <div>
        <h4 className="product-name">{data.product.name}</h4>
        <br />
        <p>By:{seller}</p>
        <p>Price:{price}</p>
        <p>Only {stock} products are available</p>
        <button className="add-to-cart-button" 
        
        //ei product koi theke astece?
        onClick={()=>data.addProduct(data.product)}
        
        >
          <i className="fas fa-shopping-cart"></i> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
