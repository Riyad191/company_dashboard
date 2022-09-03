import * as React from "react";
import { data } from "./data.js";
import "./advancedSearch.css";
import OpenRow from "./OpenRow.js";
const AdvancedSearchData = ({ search, search1, search2 }) => {
  return (
    <div id="table">
      <div className="advanced_search_table">
        {/* <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Phone</th>
      </tr>
    </thead> */}

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
            <div
              // style={{ height: isOpen ? "200px" : "60px" }}
              className="table_row"
              key={index}
            >
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <OpenRow phone={item.phone} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default AdvancedSearchData;
