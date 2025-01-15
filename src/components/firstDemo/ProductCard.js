import React from "react";

function ProductCard({ product, addToCart }) {
  const { title, price, image, category } = product;

  return (
    <div className="product-card-container">
      <img className="product-logo" src={image} alt="product-logo" />
      <div>
        <div>Title: {title}</div>
        <div>Price: {price}</div>
        <div>Category: {category}</div>
        <button onClick={() => addToCart(product)}>ADD TO CART</button>
      </div>
    </div>
  );
}

export default ProductCard;
