import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import LandingRight from "../components/Landing/LandingRight";
import Login from "../components/Landing/Login";
import SignUp from "../components/Landing/SignUp";

function Landing() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <Grid
      container
      item
      md={12}
      display="flex"
      justifyContent="center"
      flexDirection="row"
    >
      <Grid item md={7} justifyContent="center">
        {isLogin ? (
          <Login formType={isLogin} />
        ) : (
          <SignUp formType={isLogin} setFormType={setIsLogin} />
        )}
      </Grid>
      <Grid item md={5}>
        <LandingRight setFormType={setIsLogin} formType={isLogin} />
      </Grid>
    </Grid>
  );
}

export default Landing;
