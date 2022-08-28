import React, { useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { setTools } from "../redux";

const ApplicationsWindow = ({ item, index }) => {
  const dispatch = useDispatch();
  const allApplications = useSelector((state) => state.applications);
  // const allTools = useSelector((state) => state.tools);
  const [isActive, setIsActive] = useState(false);
  // const [showTools, setShowTools] = useState(false);
  // const [uniqueTools, setUniqueTools] = useState([]);

  useEffect(() => {
    filterTools();
  }, []);

  const filterTools = (i) => {
    const newTools = allApplications
      ?.map((a) => a.application.map((a) => a.tools))
      .flat()
      .flat()
      .filter((item) => item.toolName === i);
    // setUniqueTools(newTools);
    dispatch(setTools(newTools));
    // setShowTools(true);
  };
  const helloTools = item.tools.map((item) => {
    return item.toolName;
  });
  return (
    <div>
      <div className="acc_title">
        <div onClick={() => setIsActive(!isActive)} className="acc_name">
          <div className="acc_icon">
            {isActive ? <IoIosArrowDown /> : <IoIosArrowForward />}
          </div>
          <p key={index}>{item.name}</p>
        </div>
      </div>
      <div className="acc_list">
        {isActive && (
          <a href="#">
            {helloTools.map((a, i) => (
              <div>
                <a key={i} onClick={() => filterTools(a)}>
                  {a}
                </a>
                <br />
              </div>
            ))}
          </a>
        )}
      </div>
      {/* {showTools && uniqueTools.map((item) => <p>{item.toolsList}</p>)} */}
    </div>
  );
};

export default ApplicationsWindow;
