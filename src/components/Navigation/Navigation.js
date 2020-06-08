import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navigation.css";

export default function Navigation() {
  return (
    <Navbar variant="dark" expand="lg" fixed="top" className="custom-navbar">
      <Navbar.Brand href="/home">cmok</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />{" "}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Item>
            <Nav.Link href="/me">me</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/hire">hire</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/contact">contact</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/explore">explore</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
