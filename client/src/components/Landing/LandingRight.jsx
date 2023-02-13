import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Button from "../Button";
import { Navigate, useNavigate } from "react-router-dom";
import landing_image from "../../assets/budget_landing.png";
import { height } from "@mui/system";
function LandingRight({ setFormType, formType }) {
  const navigate = useNavigate();
  return (
    <Grid
      container
      style={{ background: "linear-gradient(-20deg, #6756f5, #9859fe)" }}
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
      {/* <Typography sx={{ fontSize: "1rem", color: "white" }}>
        Enter with your personal details
      </Typography> */}
      <img
        src={landing_image}
        style={{ width: "50%", height: "40%", objectFit: "contain" }}
      />

      {formType && (
        <Typography sx={{ fontSize: "1.4rem", color: "white" }}>
          Already have an account?
        </Typography>
      )}

      {!formType && (
        <Typography sx={{ fontSize: "1.4rem", color: "white" }}>
          Don't have an account?
        </Typography>
      )}
      <Button
        text={formType ? "Sign Up" : "Sign In"}
        propClassName={"secondary__btn"}
        onClick={() => setFormType((prev) => !prev)}
      />
    </Grid>
  );
}

export default LandingRight;
