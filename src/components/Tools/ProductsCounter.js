import React, { useState } from "react";
import data from "../../data";
const ProductsCounter = () => {
  return (
    <main className="products_counter_list">
      {data
        .map((item) => {
          return item.products.length;
        })
        .map((item, index) => (
          <p className="products_counter" key={index}>
            Products: &nbsp;&nbsp;{" "}
            <span className="counter_number">{item}</span>
          </p>
        ))}
    </main>
  );
};
export default ProductsCounter;
