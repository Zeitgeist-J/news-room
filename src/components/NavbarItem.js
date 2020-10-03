import React from "react";
import { Link } from "react-router-dom";

const NavbarItem = ({ id, icon, name, selected, selectCategory }) => (
  <Link
    style={{ textDecoration: "none" }}
    to={`/${id ? `category/${id}` : ""}`}
  >
    <div
      className={`navbar-item is-selected-${selected.toString()}`}
      onClick={() => selectCategory(id)}
    >
      <p>{name}</p>
    </div>
  </Link>
);

export default NavbarItem;
