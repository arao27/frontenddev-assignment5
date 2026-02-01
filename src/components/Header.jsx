import { Link } from "react-router-dom";
import "./Header.css";

function Header({ storeName, cartCount }) {
  return (
    <header className="header">
      <h1>{storeName}</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link> {/* optional route */}
        <Link to="/contact">Contact</Link> {/* optional route */}
      </nav>
      <div className="cart-container">
        <Link to="/cart">
          <span className="cart-icon">🛒</span>
          <span className="cart-count">{cartCount}</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;