import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
     
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid py-3">
          <img src="../src/assets/logo.svg"style={{width:'15rem'}} className="zerodha-logo"/>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to='/signup'>
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/about'>
                  About
                </Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link" to='/product'>
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/pricing/Equity'>
                  Pricing
                </Link>
              </li>
              
             
            </ul>
          </div>
        </div>
      </nav>
    
  );
}

export default Navbar;
