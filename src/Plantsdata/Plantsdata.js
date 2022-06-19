import React, { useState } from "react";

const Cardsdata = () => {
  const [products] = useState([
    {
      id: "1",
      name: "Oxalis Plant",
      price: "900",
      image:
        "https://i.pinimg.com/236x/c7/69/9a/c7699a53b1ace1834b2578024a2bc8ab.jpg",
    },
    {
      id: "2",
      name: "Monstera Deliciosa Plant",
      price: "1600",
      image:
        " https://i.pinimg.com/564x/f6/37/0d/f6370de5da068b312b676d27b5104d30.jpg",
    },
    {
      id: "3",
      name: "Etsy Plant",
      price: "800",
      image:
        "https://i.pinimg.com/564x/d3/34/70/d33470e70f140bccc9cc0de21af9d3bb.jpg",
    },
    {
      id: "4",
      name: "Jade Plant",
      price: "900",
      image:
        " https://i.pinimg.com/564x/d7/6e/ae/d76eae4fa976bb4fd6a92dd8c0ff9c73.jpg",
    },
    {
      id: "5",
      name: "Spathiphyllum Plant",
      price: "2500",
      image:
        " https://i.pinimg.com/564x/8f/4a/56/8f4a5605886c924219367566b6018042.jpg",
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

export default Cardsdata;
