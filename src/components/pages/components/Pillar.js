import React from "react";
import { IoIosArrowForward } from "react-icons/io";
const Pillar = ({ pillar, filterProducts }) => {
  return (
    <div className="pillarName">
      <button onClick={filterProducts} className="btn">
        {pillar}
        <span className="arrow_icon">
          <IoIosArrowForward />
        </span>
      </button>
    </div>
  );
};

export default Pillar;
