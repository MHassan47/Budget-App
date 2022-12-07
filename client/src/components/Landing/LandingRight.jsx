import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
function LandingRight() {
  return (
    <Grid
      container
      style={{ backgroundColor: "#3aa9ab" }}
      display="flex"
      justifyContent="center"
      alignContent="center"
      height="100vh"
    >
      <Typography
        sx={{
          fontSize: "4rem",
          fontWeight: "600",
          color: "white",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Hello, Friend!
      </Typography>
      <Typography sx={{ fontSize: "1rem", color: "white" }}>
        Enter with your personal details
      </Typography>
    </Grid>
  );
}

export default LandingRight;
