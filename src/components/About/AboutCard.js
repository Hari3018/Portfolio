import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  const [showMore, setShowMore] = useState(false);

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hari Prasad S </span>
            from <span className="purple"> TamilNadu, India.</span>
            <br />
            I am currently pursuing an undergraduate degree in the Computer Science and Engineering Department at CIT.
            <br />
            I have completed my secondary school in Bharathi Matric Higher Secondary School.
            <br />
            I am a dedicated student aspiring to become a software developer. I have a strong passion for coding, problem-solving, and building efficient software solutions. Along the way, I am also exploring data analysis to enhance my ability to work with structured information and derive meaningful insights.

            With a keen interest in developing scalable applications, I am continuously learning and improving my skills in programming, algorithms, and system design. My goal is to grow as a developer, contribute to impactful projects, and create innovative solutions that make a difference.
          </p>
          
          

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Hari Prasad S</footer>
        </blockquote>
      </Card.Body>

     
    </Card>
  );
}

export default AboutCard;
