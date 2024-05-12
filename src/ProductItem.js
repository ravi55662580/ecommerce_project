// ProductItem.js
import React from 'react';
import { useCart } from './CartContext';

const ProductItem = ({ product }) => {
  const { addToCart } = useCart();

  const { title, price, imageUrl } = product;

  return (
    <div className="product">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>${price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductItem;
