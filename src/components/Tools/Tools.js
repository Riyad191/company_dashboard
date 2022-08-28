import React from "react";
import { useSelector } from "react-redux";

const ToolsWindow = () => {
  const allTools = useSelector((state) => state.tools);
  return (
    <div className="toolsWindow">
      <div>
        {allTools.map((item, index) => (
          <p key={index}>{item.toolsList}</p>
        ))}
      </div>
    </div>
  );
};

export default ToolsWindow;
