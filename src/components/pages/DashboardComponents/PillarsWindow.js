import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pillar from "./Pillar";
import Products from "./Products";
import data from "../../data";
import { RiRefreshLine } from "react-icons/ri";
import ApplicationsWindow from "./ApplicationsWindow";
import ProductsCounter from "./ProductsCounter";
import { setProducts } from "../redux";

const uniquePillarName = [...new Set(data.map((item) => item.pillar))];

const PillarsWindow = () => {
  const dispatch = useDispatch();
  const allApplications = useSelector((state) => state.applications);
  const allTools = useSelector((state) => state.tools);
  // const [allProducts, setAllProducts] = useState(data);
  const [pillars, setPillars] = useState(uniquePillarName);
  const [show, setShow] = useState(false);

  const filterProducts = (i) => {
    const newProducts = data.filter((item) => item.pillar === i);
    // setAllProducts(newProducts);
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
      <div>
        {/* applications component */}
        {allApplications.map((item, index) => (
          <div key={index} className="acc">
            <div className="acc_form">
              <input
                className="acc_ipt"
                type="text"
                placeholder="search"
                name=""
              />
              <button key={index} className="acc_btn">
                <RiRefreshLine />
              </button>
            </div>
            {item.application.map((item, index) => (
              <ApplicationsWindow index={index} item={item} />
            ))}
          </div>
        ))}
        <div>
          {/* tools component */}
          {allTools.map((item, index) => (
            <p key={index}>{item.toolsList}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsWindow;
