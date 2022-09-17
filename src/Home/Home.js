import { Button, Col, Container, Row } from "reactstrap";
import "./Home.css";
import mainImg from "./3426526.jpg";
import Zoom from "react-reveal/Zoom";
import { HashLink } from "react-router-hash-link";
import Foooter from "../Foooter/Foooter";

function Home() {
  return (
    <>
      <Container className="main-banner bg-dark text-info ">
        <Row>
          <Col className="offset-3">
            <Zoom duration={1000} left={true}>
              <h2>WELLCOME</h2>
            </Zoom>
          </Col>
        </Row>
        <Row>
          <Col className="offset-4">
            <Zoom delay={1000} duration={1000} left={true}>
              <h2>Iam Ahmed Mohsen</h2>
            </Zoom>
          </Col>
        </Row>
        <Row>
          <Col className="offset-4" xs={4}>
            <Zoom duration={1000} delay={2000} left={true}>
              <img src={mainImg} alt="imgd" className="home__img" />
            </Zoom>
          </Col>
        </Row>

        <Row>
          <Col className="offset-5">
            <Zoom delay={3000} duration={2000} left={true}>
              <h2>Front-End-Developer</h2>
            </Zoom>
          </Col>
        </Row>
        <br />
        <Row>
          <Col className="offset-6">
            <Zoom delay={3000} duration={1000} left={true}>
              <HashLink to="#Mostpop">
                <Button className="btn-outline-info">Browse My Project</Button>
              </HashLink>
            </Zoom>
          </Col>
        </Row>
        <p className="skills">HTML</p>
        <p className="skills1">css</p>
        <p className="skills2">JavaScript</p>
        <p className="skills3">Bootstrap</p>
        <p className="skills4">React JS</p>
        <p className="skills5">React-strap</p>
      </Container>
      <Foooter/>
    </>
  );
}

export default Home;
