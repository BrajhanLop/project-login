import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink } from 'react-router-dom'

const NavBarr = () => {


    let activeStyle = {
        color: "red",
      };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
             <NavLink className="mx-2 text-decoration-none" style={({ isActive }) => isActive ? activeStyle : undefined} to="/">Home</NavLink>
             <NavLink className="mx-2 text-decoration-none" style={({ isActive }) => isActive ? activeStyle : undefined}  to="/products">Productos</NavLink>
              
            </Nav>
            <Nav>
              <NavLink className="mx-2 text-decoration-none" style={({ isActive }) => isActive ? activeStyle : undefined} to="/login" >Login</NavLink>
              <NavLink className="mx-2 text-decoration-none" style={({ isActive }) => isActive ? activeStyle : undefined}  to="/register">
                Register
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBarr;
