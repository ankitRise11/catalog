import React, { Component } from "react";
import StackGrid from "react-stack-grid";
import display1 from "../Assets/1.jpeg";
import display2 from "../Assets/2.jpeg";
import display3 from "../Assets/3.jpeg";
import display4 from "../Assets/4.jpeg";
import display5 from "../Assets/5.jpeg";
import display6 from "../Assets/6.jpeg";
import display7 from "../Assets/7.jpeg";
import display8 from "../Assets/8.jpeg";
import display9 from "../Assets/9.jpeg";
import display10 from "../Assets/10.jpeg";
import display11 from "../Assets/11.jpeg";
import display12 from "../Assets/12.jpeg";

const cards = [
  {
    id: "1",
    imgSrc: display1,
    tag: "food"
  },
  {
    id: "2",
    imgSrc: display2,
    tag: "festival"
  },
  {
    id: "3",
    imgSrc: display3,
    tag:"music"
  },
  {
    id: "4",
    imgSrc: display4,
    tag:"dance"
  },
  {
    id: "5",
    imgSrc: display5,
    tag:"fitness"
  },
  {
    id: "6",
    imgSrc: display6,
    tag:"health"
  },
  {
    id: "7",
    imgSrc: display7,
    tag:"fashion"
  },
  {
    id: "8",
    imgSrc: display8,
    tag:"books"
    
  },
  {
    id: "9",
    imgSrc: display9,
    tag:"nature"
    
  },
  {
    id: "10",
    imgSrc: display10,
    tag:"technology"
    
  },
  {
    id: "11",
    imgSrc: display11,
    tag:"business"
    
  },
  {
    id: "12",
    imgSrc: display12,
    tag:"sports"
  }
];

const Feed = () => {
  return (
    <div>
      <h1 className="text-center m-4">Pick Your Interests</h1>
    <StackGrid monitorImagesLoaded={true} columnWidth={250} className="m-4">
      {cards.map((card) =>(
        <div key={card.id}>
          <img width={250} src={card.imgSrc} alt={card.tag} />
        </div>
      ))}
    </StackGrid>
    </div>
  );
};

export default Feed;
