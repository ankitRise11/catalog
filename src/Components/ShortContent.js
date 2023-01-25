import React from "react";
import TravelShortContent from "../api/TravelShortContent";
import Card from "react-bootstrap/Card";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const ShortContent = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div className="bg-dark">
      {TravelShortContent.map((data) => (
        <div class="row justify-content-center py-2">
          <div class="col-sm-6 col-md-3">
            <div class="card border-white">
            <div class="card-header">{data.title}</div>
              <div class="card-body">
                <p class="card-text">
                  {data.content}
                </p>
              </div>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
};

export default ShortContent;
