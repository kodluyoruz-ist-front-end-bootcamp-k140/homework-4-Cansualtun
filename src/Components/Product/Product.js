import list from "../Data";
import Card from "../Card";
import "./Product.css";
import React from "react";
import { useState } from "react";

const Product = () => {
  const [basket, setBasket] = useState([]);

  const handleClick = (item) => {
    setBasket([...basket, item]);
    console.log(basket);
  };
  return (
    <div>
      <section>
        {list.map((item) => (
          <Card key={item.id} item={item} handleClick={handleClick} />
        ))}
      </section>
    </div>
  );
};

export default Product;
