import React, { useState } from "react";
import Pillar from "./Pillar";
import Products from "./Products";
import data from "../../data";
import ProductsCounter from "./ProductsCounter";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux";

const uniquePillarName = [...new Set(data.map((item) => item.pillar))];

const PillarsWindow = () => {
  const dispatch = useDispatch();
  const [allProducts, setAllProducts] = useState(data);
  const [pillars, setPillars] = useState(uniquePillarName);
  const [show, setShow] = useState(false);
  const filterProducts = (i) => {
    const newProducts = data.filter((item) => item.pillar === i);
    setAllProducts(newProducts);
    dispatch(setProducts(newProducts));
    setShow(true);
  };
  return (
    <section className="top">
      <div className="pillar">
        {pillars.map((category, index) => {
          return (
            <Pillar
              key={index}
              filterProducts={() => filterProducts(category)}
              pillar={category}
            />
          );
        })}
      </div>
      <div className="products_counter_items">
        <ProductsCounter />
      </div>
      <div className="products">
        <Products show={show} />
      </div>
    </section>
  );
};

export default PillarsWindow;
