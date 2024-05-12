import React from 'react';
import Navbar from './Navbar';
import ProductList from './ProductList';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
