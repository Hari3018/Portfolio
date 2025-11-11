import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Photo Club Web"
              description="I developed a Photography Club Website for our college to showcase club activities, manage memberships, and enhance community engagement. Built using React.js, Node.js, Express.js, and MongoDB. Check out the project on GitHub."
              ghLink="https://github.com/Hari3018/clubweb/tree/master"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title=" Dynamic QR Based Attendance Tracking App"
              description="Developed a mobile application to record attendance using timely generated QR codes.Implemented device restriction by verifying IMEI for authentication to prevent unauthorized attendance marking.Integrated Firebase for real-time data synchronization and secure cloud-based storage."
              ghLink="https://github.com/Hari3018/Attendance_Manager"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title=" Dijkistra Algorithm Pathfinding Visualizer"
              description="ualization tool to demonstrate the working of Dijkstra’s shortest path algorithm.–Implemented interactive grid-based pathfinding with fluid animations.–Optimized rendering for real-time visualization in a browser environment.–Incorporated color-coded status indicators to distinguish visited, unvisited, and final path nodes."
              ghLink="https://github.com/Hari3018/Pathfinding_Visualizer"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title=" Hand Bone Fracture Detection using Deep Learning"
              description=" Engineered a deep learning pipeline in Python using TensorFlow with ResNet-16 to classify X-ray scans into fractured
 and non-fractured categories. Enhanced image preprocessing and feature extraction through OpenCV techniques and improving accuracy of the
 classification model. Applied YOLOv5 for object detection, enabling precise localization of fracture regions with bounding box annotations."
              ghLink="https://github.com/Hari3018/HandBone-Fracture-Detection"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title=" Professional Survey Analysis Dashboard"
              description=" Designed and developed an interactive dashboard in Power BI using a professional survey dataset to analyze job roles,
 industries, salaries, and demographics.Created comparative bar charts and KPIs to highlight key metrics such as average salary, survey counts, and age. Enhanced with pie charts and donut charts to visualize programming language preferences and gender distribution. Built visual storytelling elements including salary vs. happiness gauges and demographic breakdowns, enabling
 stakeholders to derive actionable insights."
              ghLink="https://github.com/Hari3018/PowerBI_Dashboard"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
