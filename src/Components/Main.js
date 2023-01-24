import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import display1 from "../Assets/1.jpeg";
import display2 from "../Assets/2.jpeg";
import display3 from "../Assets/3.jpeg";
import display4 from "../Assets/4.jpeg";
import Carousel from 'react-bootstrap/Carousel';
import FirstPage from "./FirstPage";
import Catalog from "../Assets/CATALOG.png";
import "./FirstPage.css";
import Second from "./Second";
import Third from "./Third";


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
    <div className="m-2">
      <div className="LogoMain">
        <img src={Catalog} className="Logo"></img>
      </div>
      <Carousel variant="dark">
      <Carousel.Item interval={2000}>
        <FirstPage/>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <Second/>

      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <Third/>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default Main;
