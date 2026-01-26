import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header storeName="ComponentCorner" />
      <Hero
        title="Welcome to ComponentCorner"
        subtitle="Find the best tech gadgets here!"
      />
      <div className="product-list">
        <ProductCard
          name="Wireless Headphones"
          price={99.99}
          image="https://placehold.co/600x400"
          description="Premium noise-cancelling headphones with 30-hour battery life"
        />
        <ProductCard
          name="Smart Watch"
          price={249.99}
          image="https://placehold.co/600x400"
          description="Fitness tracker with heart rate monitor and GPS"
        />
        <ProductCard
          name="Bluetooth Speaker"
          price={79.99}
          image="https://placehold.co/600x400"
          description="Portable waterproof speaker with 360-degree sound"
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;