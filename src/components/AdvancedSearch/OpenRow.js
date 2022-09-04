import React from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
const OpenRow = ({ item }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="table_cell">
      <table className="table_row">
        <div className="advanced_seatch_arrow">
          {isOpen ? (
            <IoIosArrowDown onClick={() => setIsOpen(!isOpen)} />
          ) : (
            <IoIosArrowForward onClick={() => setIsOpen(!isOpen)} />
          )}
        </div>
        <p style={{ marginLeft: -47 }} className="advanced_search_table_item">
          {item.first_name}
        </p>{" "}
        <p style={{ marginLeft: -15 }} className="advanced_search_table_item">
          {item.last_name}
        </p>
        <p style={{ marginRight: -6 }} className="advanced_search_table_item">
          {item.phone}
        </p>
        <p className="advanced_search_table_item">
          {" "}
          <a href="#">{item.email}</a>{" "}
        </p>
      </table>
      {isOpen && (
        <h1 className="advanced_seatch_tool-info"> Tool Information </h1>
      )}
    </div>
  );
};

export default OpenRow;
