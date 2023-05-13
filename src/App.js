import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./components/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
import ProductPage from "./components/ProductPage";
import { useState, useEffect } from "react";
import Cart from "./components/Cart";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const [cart, setCart] = useState([]);
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const checkout = () => {
    clearCart();
  };

  return (
    <div>
      <Navbar
        cart={cart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
      />
      <Routes>
        <Route path="/" element={<Products addToCart={addToCart} />} />
        <Route path="/single-product" element={<ProductPage />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              checkout={checkout}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
