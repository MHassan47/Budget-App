import { Grid, Typography } from "@mui/material";
import React from "react";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { useNavigate } from "react-router-dom";
function AddCard() {
  const navigate = useNavigate();
  return (
    <Grid
      container
      item
      md={10}
      display="flex"
      justifyContent="center"
      alignContent="center"
      direction="column"
      style={{
        border: "0.17rem dashed #4333a1",
        borderRadius: "20px",
        height: "22vh",
      }}
    >
      <ControlPointIcon
        style={{ fontSize: "2.5rem", color: "#290c64", cursor: "pointer" }}
        onClick={() => navigate("/card")}
      />
    </Grid>
  );
}

export default AddCard;
