import React, { useState } from "react";

const Toolsdata = () => {
  const [products] = useState([
    {
      id: "1",
      name: "Coral Blue Star Cultivator",
      price: "100",
      image:
        "https://cdn.shopify.com/s/files/1/0413/2981/9803/products/Rake-Small_180x.jpg?v=1643363685",
    },
    {
      id: "2",
      name: " Garden Khurpi",
      price: "160",
      image: " https://m.media-amazon.com/images/I/31Rv02yl+iL.jpg",
    },
    {
      id: "3",
      name: "Hedge Shears",
      price: "300",
      image:
        "https://images-eu.ssl-images-amazon.com/images/I/412YTiLlRxL._AC._SR240,240.jpg",
    },
    {
      id: "4",
      name: "Combo Pack ",
      price: "600",
      image:
        " https://m.media-amazon.com/images/I/61vYYv+A8HL._AC_SR320,380_.jpg",
    },
    {
      id: "5",
      name: "Hand Trowel",
      price: "135",
      image: " https://m.media-amazon.com/images/I/61xObMu9HkL._SX679_.jpg",
    },
  ]);
  return (
    <div className="products-page">
      {products.map((product, id) => (
        <div className="products" key={id}>
          <img className="size" src={product.image} alt={product.name}></img>
          <h5>{product.name}</h5>
          <h5>Rs.{product.price}</h5>

          <button>Add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default Toolsdata;
