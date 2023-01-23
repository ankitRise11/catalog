import React, { Component } from "react";
import StackGrid from "react-stack-grid";
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
  },
  {
    id: "5",
    imgSrc: display1,
  },
  {
    id: "6",
    imgSrc: display2,
  },
  {
    id: "7",
    imgSrc: display3,
  },
  {
    id: "8",
    imgSrc: display4,
  }
];

const Feed = () => {
  return (
    <div>
      <h1 className="text-center m-4">Pick Your Interests</h1>
    <StackGrid monitorImagesLoaded={true} columnWidth={250} className="m-4">
      {cards.map((card) =>(
        <div key={card.id}>
          <img width={250} src={card.imgSrc} alt="displayPic" />
        </div>
      ))}
    </StackGrid>
    </div>
  );
};

export default Feed;
