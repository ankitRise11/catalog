import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import display1 from "../Assets/1.jpeg";
import display2 from "../Assets/2.jpeg";
import display3 from "../Assets/3.jpeg";
import display4 from "../Assets/4.jpeg";

const cards = [
  {
    id: "1",
    imgSrc: display1,
  },
  {
    id: "2",
    imgSrc: display2,
  },
  {
    id: "3",
    imgSrc: display3,
  },
  {
    id: "4",
    imgSrc: display4,
  }
];
const Main = () => {
  return (
    <div>
      <Container>
        <h1 className="text-center display-2 mt-4">Lorem Ipsum</h1>
        <Row style={{marginTop: "100px"}}>
          {cards.map((card) => (
            <Col className="mb-2">
              <img className="rounded" src={card.imgSrc} width="250px" height="300px" />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Main;
