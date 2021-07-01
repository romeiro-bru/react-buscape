import React from "react";
import logo from "../../../public/assets/images/logo-buscape.svg";
import menu from "../../../public/assets/images/menu-button.svg";
import "./style.css";

export function Nav() {
  return (
    <nav>
      <img src={logo} alt="logo" className="logo" />
      <img className="menu-btn" src={menu} alt="menu" />
    </nav>
  );
}
