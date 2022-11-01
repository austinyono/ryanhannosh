import React from "react";
import Nav from "components/Nav";
import Footer from "components/Footer";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home() {
  return (
    <>
      <Nav />
      <Container style={{ padding: "40px" }}>
        <Row>
          <Col xs="10" md="5">
            <Col style={{ margin: "20px" }}>
              <h3 style={{ fontSize: "20px" }}>Image</h3>
            </Col>
          </Col>
          <Col xs="12" md="5">
            <Col style={{ margin: "20px" }}>
              <h3 style={{ fontSize: "20px" }}>Hope you have had a blessed day! My name is Ryan Hannosh and welcome to my personal website.</h3>
            </Col>
            <Col style={{ margin: "20px" }}>
              <h3 style={{ fontSize: "20px" }}>The purpose of this website is for you to get to know me as well as possible :).</h3>
            </Col>
            <Col style={{ margin: "20px" }}>
              <h3 style={{ fontSize: "20px" }}>Here, you will find my core Values, Interests, and life experiences.</h3>
            </Col>
            <Col style={{ margin: "20px" }}>
              <h3 style={{ fontSize: "20px" }}>
                Transparency is essential to me in both a professional and personal setting. If you have any questions regarding my website/resume
                please do not hesitate to Contact me.
              </h3>
            </Col>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
