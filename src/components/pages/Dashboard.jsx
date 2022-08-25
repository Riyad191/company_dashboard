import React from "react";
import PillarsWindow from "./DashboardComponents/PillarsWindow";
import "./Dashboard.css";
import ApplicationsWindow from "./DashboardComponents/ApplicationsWindow";
import Products from "./DashboardComponents/Products";
import ToolsWindow from "./DashboardComponents/ToolsWindow";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <PillarsWindow />
      {/* <Products />
      <ApplicationsWindow />
      <ToolsWindow /> */}
    </div>
  );
};

export default Dashboard;
