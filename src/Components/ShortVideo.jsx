import React from "react";
import DataShortVideo from "./DataShortVideo";
import Sidebar from "./Sidebar";

const ShortVideo = () => {
  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <DataShortVideo/>
      </div>
    </>
  );
};

export default ShortVideo;
