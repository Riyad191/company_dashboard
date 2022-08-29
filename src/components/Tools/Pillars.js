import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts, setShowAccordion } from "../../redux";
import PillarsNames from "./PillarsNames";
import Products from "./Products";
import ProductsCounter from "./ProductsCounter";
import Tools from "./Tools";
import data from "../../data";
import AccordionList from "./AccordionList";

const uniquePillarName = [...new Set(data.map((item) => item.pillar))];

const Pillars = () => {
  const dispatch = useDispatch();
  const allTools = useSelector((state) => state.tools);
  const showTools = useSelector((state) => state.showTools);
  const [pillars, setPillars] = useState(uniquePillarName);
  const [show, setShow] = useState(false);

  const filterProducts = (i) => {
    const newProducts = data.filter((item) => item.pillar === i);
    dispatch(setProducts(newProducts));
    // dispatch(setShowAccordion(true));
    setShow(true);
  };

  return (
    <div className="dashboard_page">
      <div className="pillars_products_window">
        <div className="pillars_products-counter">
          <div className="pillar">
            {pillars.map((category, index) => {
              return (
                <PillarsNames
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
        </div>
        {show && (
          <div className="products">
            <Products show={show} />
          </div>
        )}
      </div>
      <div className="applications_tools_window">
        <AccordionList />
        {showTools && <Tools />}
      </div>
    </div>
  );
};

export default Pillars;
