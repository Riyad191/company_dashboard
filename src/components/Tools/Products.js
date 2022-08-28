import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setApplications, setShowAccordion } from "../../redux";
import ProductsInputSearch from "./ProductsSearch";

const Products = ({ show }) => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);
  const showAccordion = useSelector((state) => state.showAccordion);

  const [search, setSearch] = useState("");

  const filterApplicatoins = (i) => {
    const newApplications = allProducts
      ?.map((item) => item.product)
      .flat()
      .filter((item) => item.name === i);
    dispatch(setApplications(newApplications));
    // dispatch(setShowAccordion(false));
  };

  console.log("showAcc", showAccordion);
  const product = allProducts.map((item) =>
    item.product.map((item) => item.name)
  );

  const filtered = product
    .flat()
    .filter((item) => item.toLowerCase().indexOf(search.toLowerCase()) !== -1);

  return (
    <main id="products">
      <ProductsInputSearch search={search} setSearch={setSearch} />
      <div className="products_list">
        {filtered.map((name, index) => {
          return (
            show && (
              <a onClick={() => filterApplicatoins(name)} key={index}>
                {name}
                <br />
              </a>
            )
          );
        })}
      </div>
    </main>
  );
};

export default Products;
