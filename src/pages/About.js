import React from "react";
import Nav from "components/Nav";
import Footer from "components/Footer";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function About() {
  return (
    <>
      <Nav />
      <Container style={{ padding: "40px" }}>
        <Row>
          <Col style={{ margin: "20px" }}>
            <h3 style={{ fontSize: "20px" }}>
              I am a passionate, confident, and family-oriented individual seeking to make a difference in my community through my work and future
              endeavors.
            </h3>
          </Col>
        </Row>
        <Row>
          <Col style={{ margin: "20px" }}>
            <h3 style={{ fontSize: "20px" }}>
              I believe that association is key. Throughout my work and life experience, I have been granted the opportunity to become mentored by
              like-minded individuals who intend to grow honestly.
            </h3>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
