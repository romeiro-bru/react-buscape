import React from "react";
import logo from "./logo-buscape.png";
import menu from "./menu-button.svg";
import "./style.css";

export function Nav({ amount }) {
  return (
    <nav>
      <img src={logo} alt="logo" className="logo" />
      <img className="menu-btn" src={menu} alt="menu" />

      {/* <span className="amount">
        <img src={circle} alt="circle" />
        <span className="amount-text">{amount}</span>
      </span> */}
    </nav>
  );
}
