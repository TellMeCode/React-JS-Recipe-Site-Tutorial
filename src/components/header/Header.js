import React from "react";
import "./Header.css";

let Header = () => {
  return (
    <div className="header">
      <span className="logo">Tell Me Recipes</span>
      <nav>
        <button>Indian</button>
        <button>Italian</button>
      </nav>
    </div>
  );
};

export default Header;
