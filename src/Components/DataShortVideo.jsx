import React from "react";
import education from "../api/EducationShorts";
import "./Data.css";

const DataShortVideo=()=>{
    return(
        <>
        <div className="bodyHider">
        {education.map((vid) =>(
            <section>
                <iframe width="350" height="740" src={vid.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                {/* <iframe src="https://widget.tagembed.com/84153?view" style=" width:100%;height:500px;overflow: auto;" frameborder="0" allowtransparency="true"></iframe> */}
            </section>
            ))}
        </div>
        </>
    )
}

export default DataShortVideo;