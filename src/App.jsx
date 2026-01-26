import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import CartItem from "./components/CartItem";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  // Cart state
  const [cart, setCart] = useState([]);

  // Sample product data
  const products = [
    { 
      id: 1, 
      name: "Wireless Headphones", 
      price: 99.99, 
      image: "https://placehold.co/600x400",
      description: "Premium noise-cancelling headphones with 30-hour battery life"
    },
    { 
      id: 2, 
      name: "Smart Watch", 
      price: 249.99, 
      image: "https://placehold.co/600x400",
      description: "Fitness tracker with heart rate monitor and GPS"
    },
    { 
      id: 3, 
      name: "Bluetooth Speaker", 
      price: 79.99, 
      image: "https://placehold.co/600x400",
      description: "Portable waterproof speaker with 360-degree sound"
    },
    { 
      id: 4, 
      name: "Laptop Stand", 
      price: 49.99, 
      image: "https://placehold.co/600x400",
      description: "Ergonomic aluminum stand for laptops and tablets"
    },
    { 
      id: 5, 
      name: "Webcam", 
      price: 129.99, 
      image: "https://placehold.co/600x400",
      description: "4K webcam with auto-focus and noise reduction"
    },
    { 
      id: 6, 
      name: "Mechanical Keyboard", 
      price: 159.99, 
      image: "https://placehold.co/600x400",
      description: "RGB backlit keyboard with custom switches"
    }
  ];

  // Add product to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Remove product from cart by index
const removeFromCart = (indexToRemove) => {
  setCart(cart.filter((_, index) => index !== indexToRemove));
  };


  // Total cart price
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <Header storeName="ComponentCorner" cartCount={cart.length} />
      <Hero
        title="Welcome to ComponentCorner"
        subtitle="Find the best tech gadgets here!"
        cta="Shop Now"
      />

      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => addToCart(product)}
          />
        ))}
      </div>

      <div className="cart-section">
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item, index) => (
             <CartItem
              key={index}
              item={item}
              onRemove={() => removeFromCart(index)} // ← now removes only this specific item
            />
          ))}

            <p>Total: ${total.toFixed(2)}</p>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;