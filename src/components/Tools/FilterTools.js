import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTools, setShowTools, setShowAccordion } from "../../redux";
const FilterTools = ({ filterTools, item, index }) => {
  const dispatch = useDispatch();
  return (
    <div>
      {/* <div key={index} onClick={() => filterTools(item)}>
        <a onClick={() => dispatch(setShowTools(true))}>{item}</a>
        <br />
      </div> */}
    </div>
  );
};

export default FilterTools;
