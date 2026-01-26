import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <p className="footer-title">ComponentCorner</p>
          <p>Email: support@componentcorner.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Main St, City, State</p>
        </div>
        <div className="footer-right">
          <p>About</p>
          <p>Contact</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;