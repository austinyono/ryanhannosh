import React from "react";
import Nav from "components/Nav";
import Footer from "components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Interests() {
  return (
    <>
      <Nav />
      <Container style={{ padding: "40px" }}>
        <h2 className="mb-4" style={{ color: "#ECC032" }}>
          Reading
        </h2>
        <Row>
          <Col>
            <h3 className="mb-4" style={{ fontSize: "20px" }}>
              I am a passionate, confident, and family-oriented individual seeking to make a difference in my community through my work and future
              endeavors.
            </h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 className="mb-4" style={{ fontSize: "20px" }}>
              I believe that association is key. Throughout my work and life experience, I have been granted the opportunity to become mentored by
              like-minded individuals who intend to grow honestly.
            </h3>
          </Col>
        </Row>
        <h2 className="mt-3 mb-4" style={{ color: "#ECC032" }}>
          Business Development
        </h2>
        <Row>
          <Col>
            <h3 className="mb-4" style={{ fontSize: "20px" }}>
              After graduating from High School I worked full time as a WellsFargo lead teller. During this experience I learned that working with
              others comes down to how you communicate and if you are likable. This led to the creation of the Phodeobooth in 2014. This business
              allowed me to create a source of income on the weekends while taking pictures and videos in Weddings/Birthday Parties/ and Educational
              events. As a young entrepneur experience was not on my side but my outgoing and personable attitude towards clients allowed the company
              to thrive.
            </h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 className="mb-4" style={{ fontSize: "20px" }}>
              Metro by T-Mobile Owner- I wanted to learn ways for money to work for me rather than working for money. Here, I was able to establish a
              team that allowed me to a venture into different avenues of business. Throughout this experience, I learned how to run a corporate
              franchised business operationally while enhancing my Sales skills. Today I am looking for the next step of my career to help establish a
              greater business portfolio.
            </h3>
          </Col>
        </Row>
        <h2 className="mt-3 mb-4" style={{ color: "#ECC032" }}>
          Fitness
        </h2>
        <Row>
          <Col>
            <h3 className="mb-4" style={{ fontSize: "20px" }}>
              image
            </h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 className="mb-4" style={{ fontSize: "20px" }}>
              Body and Mind work together and I am guilty of not always giving it my all but my ultimate goal is to remain healthy. Hiking is one of
              my favorite activities because I not only care for my body but am able to embrace the beauty of nature and fresh air.
            </h3>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
