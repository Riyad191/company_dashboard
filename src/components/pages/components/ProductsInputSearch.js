import React from "react";
import { RiRefreshLine } from "react-icons/ri";
const ProductsInputSearch = ({ setSearch, search }) => {
  const clearInput = (e) => {
    e.preventDefault();
    setSearch("");
  };
  return (
    <form>
      <input
        className="product_search_input"
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        placeholder="product"
      />
      <button className="products_refresh_btn" onClick={clearInput}>
        <RiRefreshLine />
      </button>
    </form>
  );
};

export default ProductsInputSearch;
