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
        <p style={{ marginLeft: -50 }} className="advanced_search_table_item">
          {item.first_name}
        </p>{" "}
        <p className="advanced_search_table_item">{item.last_name}</p>
        <p className="advanced_search_table_item">{item.last_name}</p>
        <p className="advanced_search_table_item">{item.email}</p>
      </table>
      {isOpen && <p className="advanced_seatch_tool-info"> {item.phone}</p>}
    </div>
  );
};

export default OpenRow;
