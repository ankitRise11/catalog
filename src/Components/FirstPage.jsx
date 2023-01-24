import React from "react";

import display1 from "../Assets/1.jpeg";
import display2 from "../Assets/2.jpeg";
import display3 from "../Assets/3.jpeg";
import display4 from "../Assets/4.jpeg";
import Carousel from 'react-bootstrap/Carousel';


const FirstPage=()=>{
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
    return(
        <>
            <div className="main">
                <img src={display1} className="image1 animate1 p-1"></img>
                <img src={display2} className="image2 animate2 p-1"></img>
                <img src={display3} className="image3 animate3 p-1"></img>
                <img src={display4} className="image4 animate4 p-1"></img>
                <img src={display1} className="image5 animate5 p-1"></img>
            </div>
        </>
    )
}

export default FirstPage;