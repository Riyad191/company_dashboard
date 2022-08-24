import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import ToolsWindow from "./ToolsWindow";

const ApplicationsWindow = ({ item }) => {
  const [isActive, setIsActive] = useState(false);
  const [tools, setTools] = useState(false);
  return (
    <div>
      <div className="acc_title">
        <div onClick={() => setIsActive(!isActive)} className="acc_name">
          <div className="acc_icon">
            {isActive ? <IoIosArrowDown /> : <IoIosArrowForward />}
          </div>
          <p>{item.name}</p>
        </div>
      </div>
      <div className="acc_list">
        {isActive && (
          <p>
            {item.tools.map((item) => (
              <div className="tools">
                <a onClick={() => setTools(true)} href="#">
                  {item}
                </a>
              </div>
            ))}
          </p>
        )}
      </div>
      <ToolsWindow tools={tools} />
    </div>
  );
};
export default ApplicationsWindow;
