import "../App.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductPage({ productId }) {
  const [product, setProduct] = useState(null);
  //   const [data, setData] = useState(null);

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://fakestoreapi.com/products/${productId}`,
    })
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((e) => console.log(e));
  }, [productId]);

  return (
    <>
      {product != null && (
        <div className="ProductPage">
          <div className="pp-title">{product.title}</div>
          <div className="pp-body">
            <img src={product.image} alt="#" className="pp-image"></img>
            <div className="pp-description">
              <div className="pp-price">${product.price}</div>
              <div className="pp-desc-body">{product.description}</div>

              <div>
                Quantity:
                <input
                  className="pp-units"
                  placeholder="No. of units"
                  type="number"
                ></input>
              </div>
              <button className="pp-button">Add to Cart</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
