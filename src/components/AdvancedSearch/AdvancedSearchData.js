import * as React from "react";
import { data } from "./data.js";
import "./advancedSearch.css";
import { BsArrowDownUp } from "react-icons/bs";
import OpenRow from "./OpenRow.js";
const AdvancedSearchData = ({ search, search1, search2 }) => {
  const [sortedData, setSortedData] = React.useState(data);
  const [sortTableData, setSortTableData] = React.useState("ASC");

  const sorting = (col) => {
    if (sortTableData === "ASC") {
      const sorted = [...sortedData].sort((a, b) => {
        return a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1;
      });
      setSortedData(sorted);
      setSortTableData("DSC");
    }
    if (sortTableData === "DSC") {
      const sorted = [...sortedData].sort((a, b) => {
        return a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1;
      });
      setSortedData(sorted);
      setSortTableData("ASC");
    }
  };

  return (
    <div id="table">
      <div className="table_header">
        <div className="table_title" onClick={() => sorting("first_name")}>
          {" "}
          <div>Pillar</div>
          <div className="sorting_icons">
            <BsArrowDownUp />
          </div>{" "}
        </div>
        <div className="table_title" onClick={() => sorting("last_name")}>
          <div>Product</div>
          <div className="sorting_icons">
            <BsArrowDownUp />
          </div>{" "}
        </div>
        <div className="table_title" onClick={() => sorting("email")}>
          <div>Application</div>
          <div className="sorting_icons">
            <BsArrowDownUp />
          </div>{" "}
        </div>
        <div className="table_title" onClick={() => sorting("phone")}>
          <div>Tool</div>
          <div className="sorting_icons">
            <BsArrowDownUp />
          </div>{" "}
        </div>
      </div>
      <div className="advanced_search_table">
        {sortedData
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
