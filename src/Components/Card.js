import React from "react";

const Card = ({ item }) => {
  const { title, author, price, img } = item;
  return (
    <div className="cards">
      <div className="image-box">
        <div className="card hover:scale-105 duration-200">
          <img src={img} alt="" />
        </div>
        <div className="details">
          <p>{title}</p>
          <p>{author}</p>
          <p>Price - {price}Rs</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
