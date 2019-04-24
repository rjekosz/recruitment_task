import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./../img/logo.png";
import { MdMenu, MdShare, MdSearch, MdKeyboardBackspace } from "react-icons/md";

const Header = props => {
  if (props.status === true) {
    return (
      <div className="header-wrapper">
        <Link to="/">
          <span className="back-btn" onClick={props.action}>
            <MdKeyboardBackspace />
          </span>
        </Link>
        <img src={logo} alt="logo" />
        <span className="search-share-btn">
          <MdShare />
        </span>
      </div>
    );
  } else {
    return (
      <div className="header-wrapper">
        <span>
          <MdMenu />
        </span>
        <img src={logo} alt="logo" />
        <span className="search-share-btn">
          <MdSearch />
        </span>
      </div>
    );
  }
};

export default Header;
