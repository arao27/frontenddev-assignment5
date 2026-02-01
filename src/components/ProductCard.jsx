import "./ProductCard.css";
import { Link } from "react-router-dom";

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <p className="product-price">${product.price.toFixed(2)}</p>

      {/* Add to cart button */}
      <button className="add-to-cart-btn" onClick={onAddToCart}>
        Add to Cart
      </button>

      {/* View Details link */}
      <Link to={`/product/${product.id}`} className="view-details-link">
        View Details
      </Link>
    </div>
  );
}

export default ProductCard;