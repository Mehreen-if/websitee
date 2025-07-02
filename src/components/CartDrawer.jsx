import React from "react";

const CartDrawer = ({ cartItems, onClose }) => {
  return (
    <div className="cart-drawer">
      <button onClick={onClose}>Close</button>
      <h3>Your Cart</h3>
      {cartItems.length === 0 ? (
        <p>No items yet.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.name} width={50} />
            <div>
              <p>{item.name}</p>
              <p>₹{item.discountPrice}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CartDrawer;
