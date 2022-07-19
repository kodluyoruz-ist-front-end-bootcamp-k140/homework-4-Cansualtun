import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Nav">
      <span class="inline-grid grid-cols-3 gap-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Product">Product</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </span>
    </div>
  );
}

export default Navbar;
