import React from "react";

import "./header.css";
import logo from "../../assets/relevel.jpeg";

export default function Header() {
  return (
    <header className="page-header">
      <div className="logo">
        <img src={logo} alt="Relevel" />
        {/* Color for the text was not mentioned so I used the one in the example */}
        <h3>Relevel Trello</h3>
      </div>
    </header>
  );
}
