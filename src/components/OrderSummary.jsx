import React from "react";

const OrderSummary = ({ cart }) => {
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = 6.95;
  const total = subtotal + shipping;

  return (
    <div className="order-summary">
      <h3>Order Summary</h3>
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      <p>Est. Shipping: ${shipping.toFixed(2)}</p>
      <p>Total: ${total.toFixed(2)}</p>
    </div>
  );
};

export default OrderSummary;
