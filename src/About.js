import React from "react";
import { Row, Col } from "react-bootstrap";
import "./About.css";

export default function About(props) {
  return (
    <div className="About">
      <h2>
        About <hr />
      </h2>
      <p>
        I am an enthusiastic and detail-oriented junior front-end developer with
        a solid foundation in web development, gained through an online coding
        bootcamp. Over the course of the program, I learned and applied
        technologies such as HTML, CSS, JavaScript, and React to build
        responsive, user-friendly web applications.
        <br />
        <br /> Through hands-on projects and problem-solving challenges, I
        developed the ability to write clean, maintainable code and create
        intuitive designs. Working independently and collaborating remotely with
        peers taught me how to manage my time effectively and communicate
        efficiently in a virtual team environment. <br />
        <br /> I am excited to bring my creativity, technical skills, and
        passion for front-end development to a professional team. As I begin my
        career, I look forward to contributing to impactful projects while
        continuing to grow and refine my expertise in web development.
        <br />
      </p>
      <Row>
        <Col> HTML</Col>
        <Col>CSS </Col>
        <Col>JavaScript </Col>
      </Row>
      <Row>
        <Col> React </Col>
        <Col>Bootstrap</Col>
      </Row>
    </div>
  );
}
