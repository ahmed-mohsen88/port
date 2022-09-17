import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Email.css";
// import  from "react-reveal/";
import { Col, Container, Row } from "reactstrap";
import contactImg from "./8685b8675c8412c5c6513ac0f5e8d3cd.png";
import { Zoom } from "react-reveal";
import Foooter from "../Foooter/Foooter";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_8665uph",
        "template_5f2emz4",
        form.current,
        "gkjXxpn_rnkR1vCle"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <Container className="mt-3 bg-light" id="contact">
        <Row>
          <Col lg={6}>
            <Zoom right={true}>
              <form ref={form} onSubmit={sendEmail} className="Myform">
                <div className="title">Contact me</div>
                <div className="subtitle">
                  I’m interested in freelance opportunities – especially
                  ambitious or large projects. However, if you have other
                  request or question, don’t hesitate to use the form.
                </div>
                <div className="input-container ic1">
                  <input
                    className="input"
                    type="text"
                    name="from_name"
                    placeholder=" "
                  />
                  <div className="cut"></div>
                  <label for="from_name" className="placeholder">
                    Name
                  </label>
                </div>
                <div className="input-container ic2">
                  <input
                    className="input"
                    type="email"
                    name="from_email"
                    placeholder=" "
                  />
                  <div className="cut"></div>
                  <label for="from_email" className="placeholder">
                    Email
                  </label>
                </div>
                <div className="input-container ic2">
                  <input
                    className="input"
                    type="tel"
                    name="from_mobile"
                    placeholder=" "
                  />
                  <div className="cut"></div>
                  <label
                    for="from_mobile"
                    className="placeholder"
                    placeholder=" "
                  >
                    Mobile Number
                  </label>
                </div>
                <div className="input-container ic2">
                  <textarea
                    className="input"
                    rows="10"
                    cols="30"
                    name="message"
                    placeholder=" "
                  ></textarea>
                  <div className="cut cut-short"></div>
                  <label for="message" className="placeholder" placeholder=" ">
                    Message
                  </label>
                </div>
                <input type="submit" className="submit" value="Send" />
              </form>
            </Zoom>
          </Col>
          <Col lg={6}>
            <Zoom left={true}>
              <img
                src={contactImg}
                className="rghtContact__image"
                alt="default imag"
              />
            </Zoom>
          </Col>
        </Row>
      </Container>
      <Foooter />
    </>
  );
};

export default ContactUs;

// <form >
// <h2 className="title"></h2>
// <p className="subtitle"></p>
// <div className="input-container">
// <FormGroup>
//   <Label for="user_name">Name</Label>
//   <input type="text" name="user_name" />
// </FormGroup>
// <FormGroup>
//   <Label for="user_email">Email</Label>
//   <input type="email" name="user_email" />
// </FormGroup>
// <FormGroup>
//   <Label for="message">Message</Label>
//   <br />
//   <textarea
//     rows="10"
//     cols="30"
//     placeholder="Enter your message"
//     name="message"
//   ></textarea>
// </FormGroup>
// <input type="submit" value="Send" className="bg-info" />
// </div>
// </form>
