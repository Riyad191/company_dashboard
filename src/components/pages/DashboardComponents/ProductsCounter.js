import React, { useState } from "react";
import data from "../../data";
const ProductsCounter = () => {
  const [countProducts, setCountProducts] = useState(data);
  return (
    <div className="products_counter_list">
      {countProducts
        .map((item) => {
          return item.product;
        })
        .map((item) => {
          return item.length;
        })
        .map((item, index) => (
          <p className="products_counter" key={index}>
            Products: &nbsp;&nbsp;{" "}
            <span className="counter_number">{item}</span>
          </p>
        ))}
    </div>
  );
};
export default ProductsCounter;
