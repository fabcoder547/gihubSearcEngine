import React, { useState, useContext } from "react";

import { Link } from "react-router-dom";

import { UserContext } from "../context/UserContext";
const Navbar = () => {
  const context = useContext(UserContext);

  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbar-custom  ">
        <a className="navbar-brand" href="/">
          gitAPI
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <span className="navbar-text text-white ">
            Welcome {context.user?.email ? context.user?.email : ""}
          </span>
          <ul className="navbar-nav ml-auto ">
            {context.user ? (
              <li className="nav-item">
                <a
                  href="#"
                  onClick={() => {
                    context.setUser(null);
                  }}
                  className="nav-link"
                >
                  logout
                </a>
              </li>
            ) : (
              <>
                <li className="nav-item  ">
                  <a className="nav-link" href="/signup">
                    signup <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/signin">
                    Signin
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

