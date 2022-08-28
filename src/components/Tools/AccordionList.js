import React from "react";
import Applications from "./Applications";
import { RiRefreshLine } from "react-icons/ri";
import { useSelector } from "react-redux";
const AccordionList = () => {
  const allApplications = useSelector((state) => state.applications);
  return (
    <div>
      {allApplications.map((item, index) => (
        <div key={index} className="acc">
          <div className="acc_form">
            <input
              className="acc_ipt"
              type="text"
              placeholder="search"
              name=""
            />
            <button className="acc_btn">
              <RiRefreshLine />
            </button>
          </div>
          {item.application.map((item, index) => (
            <Applications key={index} item={item} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AccordionList;
