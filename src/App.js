import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./components/Products";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
import ProductPage from "./components/ProductPage";
import { useState } from "react";
import Cart from "./components/Cart";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/single-product" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
