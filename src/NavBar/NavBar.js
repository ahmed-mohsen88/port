import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  Row,
  Col,
} from "reactstrap";
import "./NavBar.css";
import mainLogo from "./mLogo.png";

function NavBar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar
        {...args}
        expand="md"
        className="navbar-dark bg-dark text-info ms-1 me-1"
      >
        <NavbarBrand>
          <Link to="/">
            <img src={mainLogo} alt="logo" className="Main__Logo " />
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="custom-toggler ">
          <Nav className="navCenterDiv me-auto" navbar>
            <Container fluid="md" className="CenterDiv mx-auto">
              <Row>
                <Col md={3} sm={2} className="offset-md-2">
                  <NavItem>
                    {" "}
                    <Link to="/about">About US</Link>
                  </NavItem>
                </Col>
                <Col md={3} sm={2}>
                  <NavItem>
                    <Link to="/contact">Contact Us</Link>
                  </NavItem>
                </Col>
                <Col md={3} sm={2}>
                  <NavItem>
                    <Link to="/project">Project</Link>
                  </NavItem>
                </Col>
              </Row>
            </Container>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
export default NavBar;
