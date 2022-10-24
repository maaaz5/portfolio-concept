import React from "react";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="header__main">
        <ul className="header__main-nav">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "header__main-nav__link  header__main-nav__link-active"
                : "header__main-nav__link"
            }
          >
            _hello
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive
                ? "header__main-nav__link header__main-nav__link-active"
                : "header__main-nav__link"
            }
          >
            _about me
          </NavLink>
          <NavLink
            to={"/projects"}
            className={({ isActive }) =>
              isActive
                ? "header__main-nav__link header__main-nav__link-active"
                : "header__main-nav__link"
            }
          >
            _projects
          </NavLink>
        </ul>
      </div>
      <div className="header__bottom"></div>
    </div>
  );
};

export default Header;
