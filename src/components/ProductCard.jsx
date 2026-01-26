import React from "react";
import "./ProductCard.css";

function ProductCard({ name, price, image, description }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <div className="product-info">
        <h3>{name}</h3>
        <p>{description}</p>
        <p className="price">${price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default ProductCard;
