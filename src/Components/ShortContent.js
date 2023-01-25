import React from "react";
import TravelShortContent from "../api/TravelShortContent";
import Card from "react-bootstrap/Card";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Sidebar from "./Sidebar";

const ShortContent = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
    <div className="d-flex">
    <Sidebar/>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {TravelShortContent.map((data) => (
            <Grid item xs={6}>
              <Item>
                {["Dark"].map((variant) => (
                  <Card
                    style={{ width: "100%", height: "200px" }}
                    bg={variant.toLowerCase()}
                    key={variant}
                    text={variant.toLowerCase() === "light" ? "dark" : "white"}
                  >
                    <Card.Body>
                      <Card.Title> {data.title}</Card.Title>
                      <Card.Text>{data.content}</Card.Text>
                    </Card.Body>
                  </Card>
                ))}
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
      </div>
    </>
  );
};

export default ShortContent;
