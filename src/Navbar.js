import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import { useCart } from './CartContext';
import Cart from './Cart';

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
          {/* Use NavLink components for navigation */}
          <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/store" activeClassName="active">Store</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
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
