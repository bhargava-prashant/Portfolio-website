import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiPython, DiJava, DiGit, DiMongodb, DiReact, DiNodejs } from "react-icons/di";
import { TbBrandGolang } from "react-icons/tb";
import { SiDocker, SiMysql, SiExpress } from "react-icons/si";
import { FaCode } from "react-icons/fa"; // For DSA (Generic Code Icon)
import { FaServer } from "react-icons/fa"; // added FaServer for gRPC


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Languages & Algorithms */}
      <Col xs={4} md={2} className="tech-icons">
        <FaCode title="DSA" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus title="C/C++" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython title="Python" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandGolang title="Go" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava title="Java" />
      </Col>

      {/* DevOps & Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit title="Git" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker title="Docker" />
      </Col>

      {/* Databases */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql title="SQL" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb title="MongoDB" />
      </Col>

      {/* Web Stack */}
      <Col xs={4} md={2} className="tech-icons">
        <DiReact title="React.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs title="Node.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress title="Express.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
  <FaServer title="gRPC" />
</Col>

    </Row>
  );
}

export default Techstack;
