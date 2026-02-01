import React from "react";
import ProductCard from "../components/ProductCard";

export default function ProductsPage({ products, addToCart }) {
  return (
    <div>
      <h1>All Products</h1>
      <div className="product-list" style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => addToCart(product)}
          />
        ))}
      </div>
    </div>
  );
}