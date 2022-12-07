import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import classes from "../Styles/Login.module.scss";
function Login() {
  return (
    <Grid
      container
      item
      md={12}
      display="flex"
      justifyContent="center"
      alignContent="center"
      flexDirection="column"
      // width="800px"
      // width="70vw"
      height="100vh"
    >
      <Grid
        item
        md={8}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: 28,
            color: "#3ab19b",
            width: "10rem",
          }}
        >
          Sign in
        </Typography>

        <input
          type="email"
          placeholder="Email"
          className={`${classes.input__box}`}
        />
        <input
          type="password"
          placeholder="Password"
          className={`${classes.input__box}`}
        />

        <a href="#">Forgot your password?</a>
      </Grid>
    </Grid>
  );
}

export default Login;
