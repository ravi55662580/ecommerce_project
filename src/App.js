// App.js
import React from 'react';
import Navbar from './Navbar';
import ProductList from './ProductList';
import Cart from './Cart';
import { CartProvider } from './CartContext';
import './App.css';
import Footer from './Footer';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Navbar />
        <ProductList />
        <Footer/>
        <Cart />

      </div>
    </CartProvider>
  );
}

export default App;
