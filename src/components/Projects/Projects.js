import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import cover from "../../assets/Trivializer_cover.png";
import "./projects.css";

export default function Projects() {

  return (
    <div className="projects">
      <Row>
        <Col xs={12} md={6} lg={3}>
          <Card className="bg-dark text-white custom-card">
            <Card.Link href="https://github.com/cmok4290/node-terminal"><Card.Img src="#" alt="Node Terminal cover" /></Card.Link>
            <Card.Body>
              <Card.Link href="https://github.com/cmok4290/node-terminal"><Card.Title>Node Terminal</Card.Title></Card.Link>
              <Card.Text>An nodejs terminal backend.</Card.Text>
              <Card.Link href="https://github.com/cmok4290/node-terminal">github</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <Card className="bg-dark text-white custom-card">
            <Card.Link href="https://trivializerapp.com"><Card.Img src={cover} alt="Trivializer cover" /></Card.Link>
            <Card.Body>
              <Card.Link href="https://trivializerapp.com"><Card.Title>Trivializer</Card.Title></Card.Link>
              <Card.Text>An app to create and manage trivia games.</Card.Text>
              <Card.Link href="https://github.com/Lambda-School-Labs/Labs8-Trivializer">github</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
