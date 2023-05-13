import React from "react";
import { Link } from "react-router-dom";
import OrderSummary from "../components/OrderSummary";

const Cart = ({ cart, removeFromCart, checkout }) => (
  <div className="cart">
    <div className="cart-items">
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <h4>Quantity: {item.quantity}</h4>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <Link to="/">
        <button>Continue Shopping</button>
      </Link>
    </div>
    <div className="order-summary">
      <OrderSummary cart={cart} />
      <button onClick={checkout}>Checkout</button>
      <div>
          <button>Sign in and Check Out</button>
      </div>
    </div>
  </div>
);

export default Cart;
