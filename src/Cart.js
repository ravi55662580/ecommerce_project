import React from 'react';

const Cart = ({ cartElements, removeItem }) => {
  // Calculate total price
  const totalPrice = cartElements.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul className="cart-items">
        {cartElements.map((cartItem, index) => (
          <li key={index} className="cart-item">
            <div className="cart-item-info">
              <img src={cartItem.imageUrl} alt={cartItem.title} className="cart-item-img" />
              <div className="cart-item-details">
                <div><strong>{cartItem.title}</strong></div>
                <div>Price: ${cartItem.price}</div>
                <div>Quantity: {cartItem.quantity}</div>
              </div>
            </div>
            <button className="cart-remove" onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <strong>Total: ${totalPrice}</strong>
      </div>
    </div>
  );
}

export default Cart;
