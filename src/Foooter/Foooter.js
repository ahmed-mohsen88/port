import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

function Foooter() {
  return (
    <Container className="text-primary bg-dark text-center mt-2 mb-4 pb-4">
      <Row className="mt-2 mb-2">
        <h4 className="mb-4 mt-4">Important Link</h4>
        <Col sm={2} className="offset-md-2">
          <Link to="/">Home</Link>
        </Col>
        <Col sm={2}>
          {" "}
          <Link to="/about">About</Link>
        </Col>
        <Col sm={2}>
          {" "}
          <Link to="/project">Project</Link>
        </Col>
        <Col sm={2}>
          {" "}
          <Link to="/contact">Contact</Link>
        </Col>
      </Row>
      <Row className="mt-4 ">
        <Col className="pb-4">
          <h5>Stay in Touch</h5>
        </Col>
      </Row>
      <Row>
        <Col>
          {" "}
          <a
            href="https://www.facebook.com/AHMEDMOHSENSOBHI/"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <BsFacebook
                style={{
                  fontSize: "50px",
                  color: "#4267b2",
                  backgroundColor: "white",
                  borderRadius: "50%",
                }}
              />{" "}
            </span>
          </a>
        </Col>
        <Col>
          <a
            href="https://www.linkedin.com/in/ahmed-mohsen-a4aa33249"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin
              style={{
                fontSize: "50px",
                color: "#4267b2",
                backgroundColor: "white",
                borderRadius: "50%",
              }}
            />
          </a>
        </Col>
        <Col>
          <a
            href="https://github.com/ahmed-mohsen88"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub
              style={{
                fontSize: "50px",
                color: "black",
                backgroundColor: "white",
                borderRadius: "50%",
              }}
            />
          </a>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h3>
            <address>Ahmed.mohsen.web@gmail.com</address>
          </h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Foooter;
