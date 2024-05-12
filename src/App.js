import React, { useState } from 'react';
import Navbar from './Navbar';
import Cart from './Cart';
import ProductList from './ProductList';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  // Define the cart elements array
  const [cartElements, setCartElements] = useState([
    {
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      quantity: 2,
    },
    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      quantity: 3,
    },
    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      quantity: 1,
    }
  ]);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="App">
      <Navbar onCartClick={toggleCart} />
      <ProductList />
      <Footer />
      {isCartOpen && (
        <div className="cart-sidebar">
          <button className="close-btn" onClick={toggleCart}><i className="fas fa-times"></i></button>
          <Cart cartElements={cartElements} />
        </div>
      )}
    </div>
  );
}

export default App;
