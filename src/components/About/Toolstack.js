import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiFigma,
} from "react-icons/si";
import { FaGithub, } from "react-icons/fa";
import { SiOpenai, SiPostman } from "react-icons/si";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
  <FaGithub />
</Col>

<Col xs={4} md={2} className="tech-icons">
  <SiOpenai />
</Col>
<Col xs={4} md={2} className="tech-icons">
  <SiPostman />
</Col>
    </Row>
  );
}

export default Toolstack;