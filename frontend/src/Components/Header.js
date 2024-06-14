import React from "react";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <>
      <div className="position-relative">
        <img src={logo} alt=""/> 
        <nav className=" top-nav navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <div
              className="collapse navbar-collapse d-flex justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-2 mb-2 mb-lg-0 text-light">
                <li className="nav-item">
                  <Link to="/" className="nav-link active">
                    EMAIL:mujawdiyaanmol@gmail.com{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link active">
                    PHONE:7770860265
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/gallery" className="nav-link active">
                    Gallery
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link active">
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="nav-item text-light ">
                <IoCartOutline />
              </div>
            </div>
          </div>
        </nav>

        <nav className=" bottom-nav navbar navbar-expand-lg navbar-light bg-light py-4">
          <div className="container-fluid">
            <div
              className="collapse navbar-collapse d-flex justify-content-end me-5 fw-bold fs-4 blockquote"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-5 mb-2 mb-lg-0  ">
                <li className="nav-item px-3">
                  <Link to="/home" className="nav-link active">
                    HOME{" "} 
                  </Link>
                </li> 
                <li className="nav-item px-3">
                  <Link to="/about" className="nav-link active">
                    ABOUT
                  </Link>
                </li>
                <li className="nav-item px-3">
                  <Link to="/gallery" className="nav-link active">
                    GALLERY
                  </Link>
                </li>
                <li className="nav-item px-3">
                  <Link
                    to="/contact"
                    className="nav-link active"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    CONTACT US
                  </Link>
                </li>
              </ul>
              <div className="nav item ">
                <FaSearch />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
