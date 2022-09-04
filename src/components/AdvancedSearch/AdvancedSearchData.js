import * as React from "react";
import { data } from "./data.js";
import "./advancedSearch.css";
import OpenRow from "./OpenRow.js";
const AdvancedSearchData = ({ search, search1, search2 }) => {
  return (
    <div id="table">
      <div className="table_header">
        <div>Pillar</div>
        <div>Product</div>
        <div>Application</div>
        <div>Tool</div>
      </div>
      <div className="advanced_search_table">
        {data
          .filter((a) => {
            return (
              a.first_name.toLowerCase().indexOf(`${search}`.toLowerCase()) !==
                -1 ||
              a.last_name.toLowerCase().indexOf(`${search}`.toLowerCase()) !==
                -1 ||
              a.email.toLowerCase().indexOf(`${search}`.toLowerCase()) !== -1 ||
              a.phone.toLowerCase().indexOf(`${search}`.toLowerCase()) !== -1
            );
          })
          .filter((a) => {
            return a.email.indexOf(`${search1}`) !== -1;
          })
          .filter((a) => {
            return a.phone.indexOf(`${search2}`) !== -1;
          })
          .map((item, index) => (
            <OpenRow key={index} item={item} />
          ))}
      </div>
    </div>
  );
};

export default AdvancedSearchData;
