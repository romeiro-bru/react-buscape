import React from "react";
import logo from "./logo-buscape.png";
import menu from "./menu-button.svg";
import circle from "./red-circle.svg";
import "./style.css";

export function Nav({ amount }) {
  return (
    <nav>
      <img src={logo} alt="logo" className="logo" />
      <img className="menu-btn" src={menu} alt="menu" />

      <span hidden={amount === 0} className="amount">
        <img src={circle} alt="circle" />
        <button className="amount-text">{amount}</button>
      </span>
    </nav>
  );
}
