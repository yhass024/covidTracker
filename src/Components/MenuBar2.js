import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import ComponentCSS from "./ComponentCSS.css";

const MenuBar = () => {
  return (
    <div>
      <Navbar className="navbar2">
        <Navbar.Brand href="#home" className="navbarValue2">
          Covid-19 Tracker
        </Navbar.Brand>
        <Nav className="mr-auto"></Nav>
      </Navbar>
    </div>
  );
};

export default MenuBar;
