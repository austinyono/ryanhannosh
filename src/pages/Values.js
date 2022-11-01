import React from "react";
import Nav from "components/Nav";
import Footer from "components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Values() {
  return (
    <>
      <Nav />
      <Container style={{ padding: "40px" }}>
        <h2 className="mb-4" style={{ color: "#ECC032" }}>
          Faith
        </h2>
        <Row>
          <Col>
            <h3 className="mb-4" style={{ fontSize: "20px" }}>
              Image of me infront of church
            </h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 className="mb-4" style={{ fontSize: "20px" }}>
              I was born and raised a Christian Catholic. The morals that have been instilled into me through faith are; honesty, loyalty and respect.
              This has centered me throughout my life and has laid a foundation for who I want to be.
            </h3>
          </Col>
        </Row>
        <h2 className="mt-3 mb-4" style={{ color: "#ECC032" }}>
          Family
        </h2>
        <Row>
          <Col>
            <h3 className="mb-4" style={{ fontSize: "20px" }}>
              To be cont...
            </h3>
          </Col>
        </Row>
        <h2 className="mt-3 mb-4" style={{ color: "#ECC032" }}>
          Time / Happiness
        </h2>
        <Row>
          <Col>
            <h3 className="mb-4" style={{ fontSize: "20px" }}>
              Image of Christopher Sandoval Teetotum
            </h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 className="mb-4" style={{ fontSize: "20px" }}>
              During my time at MD7 as Project Specialist my mentor/supervisor gifted me a teetotum. He told me “Ryan, when times are tough and life
              is beating you down take this teetotum and spin it. Give yourself a moment to make a decision and run with it and when the teetotum stop
              a decision needs to be made.” This holds dear to me today because indecisive is a battle that most people deal with daily and I believe
              there is never a right time until you take action. This tool has helped me save time and create happiness without doubting my decisions.
            </h3>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
