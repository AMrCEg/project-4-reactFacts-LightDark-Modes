import React from "react";
import log192 from "../images/logo192.png";

const NavBar = (props) => {
  return (
    <nav className={`nav ${props.isDark ? "dark" : "light"}`}>
      <img className="nav-icon" src={log192} alt="logo" />
      <h3 className="nav-text">ReactFacts</h3>
      {/* create toggler instead of using images */}
      <div className="toggler">
        <p className={`toggler-light ${props.isDark ? "" : "light"}`}>Light</p>
        <div
          className={`toggler-slider ${props.isDark ? "" : " light"}`}
          onClick={props.toggle}
        ></div>
        <p className={`toggler-dark ${props.isDark ? "" : "light"}`}>Dark</p>
      </div>
    </nav>
  );
};

export default NavBar;
