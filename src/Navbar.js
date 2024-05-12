// Navbar.js
import React, { useState } from 'react';
import { useCart } from './CartContext';
import Cart from './Cart'; // Import the Cart component

const Navbar = () => {
  const { cartItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="brand">The Generics</div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Store</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#" onClick={toggleCart}>
            <i className="fas fa-shopping-cart"></i>
            Cart <span className="badge">{cartItems.length}</span>
          </a></li>
        </ul>
      </nav>
      {isCartOpen && <Cart />}
    </>
  );
}

export default Navbar;
