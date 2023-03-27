import { useState } from "react";
import "../App.css";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addToCart = (product, quantity) => {
    const itemIndex = cartItems.findIndex((item) => item.id === product.id);

    if (itemIndex >= 0) {
      // Item already exists in cart, update quantity
      const newCartItems = [...cartItems];
      newCartItems[itemIndex].quantity += quantity;
      setCartItems(newCartItems);
    } else {
      // Item does not exist in cart, add to cart
      setCartItems([...cartItems, { ...product, quantity }]);
    }
  };

  // Function to remove an item from the cart
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  // Function to clear all items from the cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Calculate the total cost of all items in the cart
  const totalCost = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-details">
                <div className="cart-item-title">{item.title}</div>
                <div className="cart-item-price">${item.price}</div>
                <div className="cart-item-quantity">
                  Quantity: {item.quantity}
                </div>
              </div>
              <div className="cart-item-actions">
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <div className="cart-total">
              <div className="cart-total-label">Total:</div>
              <div className="cart-total-value">${totalCost.toFixed(2)}</div>
            </div>
            <button onClick={clearCart}>Clear Cart</button>
            <button>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
