import React from "react";
import "./Data.css";
import travel from "../api/TravelLongVideo";
import Sidebar from "./Sidebar";

const LongContent = () => {
  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <div className="bodyHider">
          {travel.map((vid) => (
            <section>
              <iframe
                width="1000"
                height="750"
                src={vid.link}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </section>
          ))}
        </div>
      </div>{" "}
    </>
  );
};

export default LongContent;
