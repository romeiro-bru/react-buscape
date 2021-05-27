import React from "react";
import logo from "./logo-buscape.png";
import menu from "./menu-button.svg";
import "./style.css";

export function Nav() {
  return (
    <nav>
      <img src={logo} alt="logo" className="logo" />
      <img className="menu-btn" src={menu} alt="menu" />
    </nav>
  );
}
