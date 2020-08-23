import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import ComponentCSS from "./ComponentCSS.css";

const MenuBar = () => {
  return (
    <div>
      <Navbar className="navbar">
        <Navbar.Brand href="#home" className="navbarValue">
          Covid-19
        </Navbar.Brand>
        <Nav className="mr-auto"></Nav>
      </Navbar>
    </div>
  );
};

export default MenuBar;
