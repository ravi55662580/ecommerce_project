// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import ProductList from './ProductList';
import Cart from './Cart';
import { CartProvider } from './CartContext';
import Footer from './Footer';
import About from './About'; // Import the About component

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<ProductList />} />
            <Route path="/about" element={<About />} /> {/* Ensure that the About component is rendered here */}
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
