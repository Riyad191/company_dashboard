import React, { useState } from "react";
import Bottom from "./ApplicationsWindow";
import ProductsInputSearch from "./ProductsInputSearch";
const Products = ({ allProducts, show }) => {
  const [showApplication, setShowApplication] = useState(false);
  const [search, setSearch] = useState("");
  const [allApplications, setAllApplications] = useState(
    allProducts.map((a) => a.product).flat()
    // nested array and map creates new array
  );

  const filterApplicatoins = (i) => {
    const newApplications = allProducts
      .map((a) => a.product)
      .flat()
      .filter((item) => item.name === i);
    setAllApplications(newApplications);
    setShowApplication(true);
  };

  const product = allProducts.map((a) => a.product.map((a) => a.name));
  const filtered = product
    .flat()
    .filter((item) => item.toLowerCase().indexOf(search.toLowerCase()) !== -1);

  return (
    <div id="products">
      <ProductsInputSearch search={search} setSearch={setSearch} />
      <div className="products_list">
        {filtered.map((name, index) => {
          return (
            show && (
              <a onClick={() => filterApplicatoins(name)} href="#" key={index}>
                {name}
                <br />
              </a>
            )
          );
        })}
      </div>
      {/* allApplications data won't work once propped  */}
      {/* <Bottom allApplications={allApplications} /> */}
      {allApplications.map(
        (item) =>
          showApplication && (
            <div className="acc">
              {item.applications.map((item) => (
                <Bottom item={item} show={show} />
              ))}
            </div>
          )
      )}
      {/* how to manage this in bottom box */}
    </div>
  );
};

export default Products;
