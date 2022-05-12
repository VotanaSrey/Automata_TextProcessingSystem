import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { navItems } from "../../common/constants";

const Header = () => {
  return (
    <nav className="header__navbar">
      <Link to="/" className="header__logo">
        cadt
      </Link>
      <ul className="header__items">
        {navItems.map((item) => {
          return (
            <li key={item.key} className="header__item">
              <Link to={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Header;
