import React from "react";
import { Col, Container, Row } from "reactstrap";
import "reactstrap";
import ProgressBaar from "../ProgressBar/ProgressBar";
import {
  FcBiotech,
  FcBullish,
  FcDeployment,
  FcElectricity,
} from "react-icons/fc";
import "./About.css";
import { Zoom } from "react-reveal";
import Foooter from "../Foooter/Foooter";

function About() {
  return (
    <>
      <Container className="main__About bg-dark text-info text-center mt-2">
        <Zoom right={true}>
          <div className="About__firstdiv">
            <h1 className="mb-5">Hi, I’m Ahmed Mohsen. Nice to meet you.</h1>
            <p style={{ fontSize: "20px" }}>
              Since beginning my journey as a freelance designer over years ago,
              I've done remote work for agencies, consulted for startups, and
              collaborated with talented people to create digital products for
              both business and consumer use. I'm quietly confident, naturally
              curious, and perpetually working on improving my chops one design
              problem at a time
            </p>
          </div>
        </Zoom>

        <Zoom left={true}>
          <Container className="About__second_div mt-4">
            <Row className="mt-4">
              <Col>
                <h2>Why Work with me</h2>{" "}
              </Col>
            </Row>
            <Row className="mt-5">
              <Col className="offset-md-2 offset-sm-0" sm={12} md={4}>
                <h3>Easy Navigation</h3>
                <FcElectricity style={{ fontSize: "200px" }} />
              </Col>

              <Col sm={12} md={4}>
                <h3>Trendy Appearance</h3>
                <FcBullish style={{ fontSize: "200px" }} />
              </Col>
            </Row>
            <Row>
              <Col className="offset-md-2 offset-sm-0" sm={12} md={4}>
                <h3>Flat design</h3>
                <FcDeployment style={{ fontSize: "200px" }} />
              </Col>

              <Col sm={12} md={4}>
                <h3>NO Lags</h3>
                <FcBiotech style={{ fontSize: "200px" }} />
              </Col>
            </Row>
          </Container>
        </Zoom>
      </Container>
      <ProgressBaar />
      <Foooter/>
    </>
  );
}

export default About;
