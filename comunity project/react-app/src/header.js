import React from "react";
import logo from "./img/pngfuel.com.png";
import {
  Link
} from "react-router-dom";

export default function Header(props) {
  console.log(props);
  return (
    <nav className="navbar navbar-expand-sm  navbar-dark bg-success fixed-top">
    <Link className="navbar-brand" to="/">
      <img src={logo} alt="logo" style={{width:'90px'}}/>
      GO GREEN STAY CLEAN
    </Link>

    <button className="navbar-toggler hido" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon hido"></span>
    </button>
    <div className="collapse navbar-collapse hido" id="collapsibleNavbar">

    <ul className="ritt navbar-nav " >
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/news&events">News and Events</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">Contact Us</Link>
      </li>
    </ul>
    </div>
</nav>
  );
}