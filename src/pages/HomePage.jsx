import React from "react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";

export default function HomePage({ products, addToCart }) {
  return (
    <div>
      <Hero
        title="Welcome to ComponentCorner"
        subtitle="Find the best tech gadgets here!"
        cta="Shop Now"
      />

      <h2>Featured Products</h2>
      <div className="product-list" style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {products.slice(0, 3).map((product) => (
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