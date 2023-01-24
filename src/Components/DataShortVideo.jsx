import React from "react";
import education from "../api/EducationShorts";
import "./Data.css";

const DataShortVideo=()=>{
    return(
        <>
        {education.map((vid) =>(
        <div className="bodyHider">
                      <iframe width="350" height="740" src="https://www.youtube.com/embed/{vid.link}?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
            ))}
        </>
    )
}

export default DataShortVideo;