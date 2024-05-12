import React from 'react';

const ProductItem = ({ product }) => {
  const { title, price, imageUrl } = product;

  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={imageUrl} className="card-img-top" alt="Product" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">${price}</p>
          <a href="#" className="btn btn-primary">Add to Cart</a>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
