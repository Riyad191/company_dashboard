import React, { useState } from "react";
import ApplicationsWindow from "./ApplicationsWindow";
import ProductsInputSearch from "./ProductsInputSearch";

const Products = ({ allProducts, show }) => {
  const [showApplication, setShowApplication] = useState(false);
  const [search, setSearch] = useState("");
  const [allApplications, setAllApplications] = useState(
    allProducts.map((a) => a.product).flat()
  );

  const filterApplicatoins = (i) => {
    const newApplications = allProducts
      .map((a) => a.product)
      .flat()
      .filter((item) => item.name === i);
    setAllApplications(newApplications);
    setShowApplication(true);
  };

  const product = allProducts.map((item) =>
    item.product.map((item) => item.name)
  );
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
      {allApplications.map(
        (item) =>
          showApplication && (
            <div className="acc">
              {item.applications.map((item) => (
                <ApplicationsWindow item={item} show={show} />
              ))}
            </div>
          )
      )}
    </div>
  );
};

export default Products;
