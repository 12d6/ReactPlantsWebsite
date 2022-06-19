import React, { useState } from "react";

const Decordata = () => {
  const [products] = useState([
    {
      id: "1",
      name: "Mango Basket",
      price: "400",
      image:
        "https://cdn.shopify.com/s/files/1/0413/2981/9803/products/1_f150eefd-b0fd-4dd3-9072-4ff93c92abb8_1024x1024@2x.png?v=1603467885",
    },
    {
      id: "2",
      name: "Teal Top Jute Basket",
      price: "500",
      image:
        " https://cdn.shopify.com/s/files/1/0413/2981/9803/products/debbiemeaning_1_a1f7cfad-c6e5-436b-bdf3-18b70f84008e_180x.png?v=1616000155",
    },
    {
      id: "3",
      name: "Miniature Teracotta pots",
      price: "300",
      image:
        "https://cdn.shopify.com/s/files/1/0413/2981/9803/products/3S4A5147_180x.jpg?v=1636712864",
    },
    {
      id: "4",
      name: "Black Planter ",
      price: "600",
      image:
        " https://cdn.shopify.com/s/files/1/0413/2981/9803/products/3S4A4587_180x.jpg?v=1634735189",
    },
    {
      id: "5",
      name: "Mint green Planter",
      price: "495",
      image:
        " https://cdn.shopify.com/s/files/1/0413/2981/9803/products/5_1_180x.png?v=1612156542",
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

export default Decordata;
