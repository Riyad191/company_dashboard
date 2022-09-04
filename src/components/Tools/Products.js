import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setApplications, setShowAccordion } from "../../redux";
import ProductsInputSearch from "./ProductsSearch";

const Products = ({ show }) => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);
  const showAccordion = useSelector((state) => state.showAccordion);

  const [search, setSearch] = useState("");
  console.log(allProducts);
  const filterApplicatoins = (i) => {
    const newApplications = allProducts
      ?.map((item) => item.products)
      .flat()
      .filter((item) => item.productName === i);
    dispatch(setApplications(newApplications));
    console.log("newApps:", newApplications);
    dispatch(setShowAccordion(false));
  };

  console.log(
    "aaaa",
    allProducts.map((a) => a)
  );

  const product = allProducts.map((item) =>
    item.products.map((item) => item.productName)
  );

  const filtered = product
    .flat()
    .filter((item) => item.toLowerCase().indexOf(search.toLowerCase()) !== -1);

  return (
    <main id="products">
      <div className="products_section">
        <ProductsInputSearch search={search} setSearch={setSearch} />
        <div className="products_list">
          {filtered.map((name, index) => {
            return (
              show && (
                <div className="product_name">
                  <a onClick={() => filterApplicatoins(name)} key={index}>
                    {name}
                  </a>
                </div>
              )
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Products;
