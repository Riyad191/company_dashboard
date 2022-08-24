import React from "react";

const ToolsWindow = ({ tools }) => {
  return (
    tools && (
      <div className="toolsWindow">
        <h1 className="toolInfo">tool informartion</h1>
      </div>
    )
  );
};

export default ToolsWindow;
