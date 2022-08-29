import React, { useState } from "react";
import "../../App.css";
import Logo from "../../images/walmart-logo.png";
import { FaTh, FaBars, FaRegChartBar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Tools",
      icon: <FaTh />,
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: <FaRegChartBar />,
    },
  ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? "200px" : "60px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            <img src={Logo} alt="walmart logo" height={80} />
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
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
      <main className="dashboard_header_footer">
        <p className="dashboard_title">
          <span className="OSCS">OSCS</span> Omni Supply Chain System{" "}
        </p>
        <div className="dashboard">{children}</div>
        <div className="footer">
          <img src={Logo} alt="walmart logo" height={40} />
          <p className="footer_text">footer</p>
        </div>
      </main>
    </div>
  );
};

export default Sidebar;
