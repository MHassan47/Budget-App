import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Button from "../Button";
import { Navigate, useNavigate } from "react-router-dom";
function LandingRight({ setFormType, formType }) {
  const navigate = useNavigate();
  return (
    <Grid
      container
      style={{ backgroundColor: "#4333a1" }}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignContent="center"
      height="100vh"
    >
      {/* <Typography
        sx={{
          fontSize: "4rem",
          fontWeight: "600",
          color: "white",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Hello, Friend!
      </Typography> */}
      <Typography sx={{ fontSize: "1rem", color: "white" }}>
        Enter with your personal details
      </Typography>
      <Button
        text={formType ? "Sign Up" : "Sign In"}
        propClassName={"secondary__btn"}
        onClick={() => setFormType((prev) => !prev)}
      />
    </Grid>
  );
}

export default LandingRight;
