import React, { useState } from "react";
import "../App.css";
import { FaTh, FaBars, FaRegChartBar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Tools",
      icon: <FaTh />,
    },

    // {
    //   path: "/analytics",
    //   name: "Analytics",
    //   icon: <FaRegChartBar />,
    // },
  ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1
            style={{ display: isOpen ? "block" : "none" }}
            className="logo"
          ></h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="link">
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>
        <p className="dashboard_title">
          {" "}
          <span className="OSCS">OSCS</span> Omni Supply Chain System
        </p>
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
