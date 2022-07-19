import React, { useState, useEffect } from "react";
import "./Chart.css";

const Chart = ({ Chart, setChart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = Chart.filter((item) => item.id !== id);
    setChart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    Chart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {Chart.map((item) => (
        <div className="Chart_box" key={item.id}>
          <div className="Chart_img">
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
        <span>Total Price of your Chart</span>
        <span>Rs - {price}</span>
      </div>
    </article>
  );
};

export default Chart;
