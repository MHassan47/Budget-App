import Grid from "@mui/material/Grid";
import React from "react";
import LandingRight from "../components/Landing/LandingRight";
import Login from "../components/Landing/Login";

function Landing() {
  return (
    <Grid
      container
      item
      md={12}
      display="flex"
      justifyContent="center"
      flexDirection="row"
    >
      <Grid item md={8} justifyContent="center">
        <Login />
      </Grid>
      <Grid item md={4}>
        <LandingRight />
      </Grid>
    </Grid>
  );
}

export default Landing;
