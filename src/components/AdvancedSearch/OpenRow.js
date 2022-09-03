import React from "react";
import { FaBars } from "react-icons/fa";
const OpenRow = ({ phone }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="table_row">
      <FaBars onClick={() => setIsOpen(!isOpen)} />
      {isOpen && <h1>{phone}</h1>}
    </div>
  );
};

export default OpenRow;
