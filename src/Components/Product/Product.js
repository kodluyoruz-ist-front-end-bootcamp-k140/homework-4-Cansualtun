import React from "react";
import list from "../Data";
import Card from "../Card";
import "./Product.css";

function Product() {
  return (
    <div>
      <section>
        {list.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </section>
    </div>
  );
}

export default Product;
