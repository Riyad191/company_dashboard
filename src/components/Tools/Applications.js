import React, { useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { setTools, setShowTools, setShowAccordion } from "../../redux";
import FilterTools from "./FilterTools";

const ApplicationsWindow = ({ item }) => {
  const dispatch = useDispatch();
  const allApplications = useSelector((state) => state.applications);
  const showAccordion = useSelector((state) => state.showAccordion);
  const [isActive, setIsActive] = useState(false);
  console.log(isActive);
  useEffect(() => {
    filterTools();
  }, []);

  const filterTools = (i) => {
    const newTools = allApplications
      ?.map((item) => item.application.map((item) => item.tools))
      .flat()
      .flat()
      .filter((item) => item.toolName === i);
    dispatch(setTools(newTools));
  };
  const helloTools = item.tools.map((item) => {
    return item.toolName;
  });

  return (
    <main>
      <div className="acc_title">
        {/* <div
          onClick={() => dispatch(setShowAccordion(!showAccordion))}
          className="acc_name"
        > */}
        <div onClick={() => setIsActive(!isActive)} className="acc_name">
          <div className="acc_icon">
            {isActive ? <IoIosArrowDown /> : <IoIosArrowForward />}
          </div>
          <p>{item.name}</p>
        </div>
      </div>
      <div className="acc_list">
        {isActive && (
          <div>
            {helloTools.map((item, index) => (
              <div key={index} onClick={() => filterTools(item)}>
                <a onClick={() => dispatch(setShowTools(true))}>{item}</a>
                <br />
              </div>
              // <FilterTools key={index} filterTools={filterTools} item={item} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default ApplicationsWindow;
