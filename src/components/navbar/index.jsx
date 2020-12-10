import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import pwerOff from "../../assets/power-off.svg";
import { FaBell } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container">
        <Link className="navbar-brand" to="/">
          LOGO
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                comunity
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Courses
              </a>
            </li>
          </ul>
          <ul className="d-flex nav_user_section navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <img className="pwer_off" src={pwerOff} alt="" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <FaBell />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                user
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
