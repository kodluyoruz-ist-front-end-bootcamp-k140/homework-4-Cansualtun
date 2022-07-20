import React from "react";
import { useState, useEffect } from "react";

const Basket = ({ basket, setBasket, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = basket.filter((item) => item.id !== id);
    setBasket(arr);
    handlePrice();
  };
  const handlePrice = () => {
    let ans = 0;
    basket.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };
  useEffect(() => {
    handlePrice();
  });
  return (
    <article>
      {basket.map((item) => (
        <div className="basket_box" key={item.id}>
          <div className="basket_img">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your basket</span>
        <span>Rs - {price}</span>
      </div>
    </article>
  );
};

export default Basket;
