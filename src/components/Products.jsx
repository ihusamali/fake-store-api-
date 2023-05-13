import { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";

import { Link } from "react-router-dom";
import ProductPage from "./ProductPage";

function Products({ addToCart }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState({});

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [cart, setCart] = useState([]);

  function handleProductClick(product) {
    ProductPage(product);
  }

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  const handleClick = (product) => {
    setSelectedProduct(product);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleQuantityChange = (event) => {
    const value = event.target.value;
    setQuantity(parseInt(value));
  };

  const handleAddToCart = (product) => {
    if (quantity > 0) {
      setProduct(product);
      addToCart(product, quantity);
    } else {
      alert("Quantity should be more than 0");
    }
  };

  const filteredData =
    data &&
    data.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  // const handleAddToCart = (product, units) => {
  //   setCartItems((prevState) => {
  //     const newCartItems = { ...prevState };
  //     if (newCartItems[product.id]) {
  //       newCartItems[product.id].units += units;
  //     } else {
  //       newCartItems[product.id] = { ...product, units };
  //     }
  //     return newCartItems;
  //   });
  // };

  return (
    <div>
      {selectedProduct ? (
        <ProductPage productId={selectedProduct.id} addToCart={addToCart} />
      ) : (
        <>
          <div className="search-container">
            <input
              className="search"
              type="text"
              placeholder="Search products"
              onChange={handleSearch}
              value={searchTerm}
            />
          </div>
          <div className="products">
            {loading && (
              <div className="loading">
                <h2>Loading...</h2>
              </div>
            )}

            {filteredData != null &&
              filteredData.map((product) => (
                <div key={product.id} className="product-card">
                  <div onClick={() => handleClick(product)}>
                    <img
                      src={product.image}
                      alt="#"
                      className="product-image"
                    ></img>
                  </div>
                  <div className="product-description">
                    <div className="product-title">{product.title}</div>
                    <div className="product-price">${product.price}</div>
                    <div className="cart-input">
                      <input
                        className="units"
                        placeholder="No. of units"
                        type="number"
                        onChange={handleQuantityChange}
                      ></input>
                      <button
                        className="cart-button"
                        onClick={() => {
                          handleAddToCart(product);
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Products;
