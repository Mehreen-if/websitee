import React from "react";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <div className="image-container">
        <img src={product.image} alt={product.name} />
        <button className="add-btn" onClick={() => onAddToCart(product)}>
          Add to Cart
        </button>
      </div>
      <h4>{product.name}</h4>
      <p>
        <span style={{ textDecoration: "line-through", color: "gray" }}>
          ₹{product.price}
        </span>{" "}
        <strong style={{ color: "green" }}>₹{product.discountPrice}</strong>
      </p>
    </div>
  );
};

export default ProductCard;
