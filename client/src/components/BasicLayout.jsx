import React from "react";
import Grid from "@mui/material/Grid";
import Sidebar from "../components/Sidebar/Sidebar";
import RightSidebar from "../components/Sidebar/RightSideBar";
function BasicLayout(props) {
  return (
    <Grid container item md={12} direction="row">
      <Grid item md={1.6}>
        <Sidebar />
      </Grid>
      <Grid item md={8.2}>
        {props.children}
      </Grid>
      <Grid item md={2.2}>
        <RightSidebar />
      </Grid>
    </Grid>
  );
}

export default BasicLayout;
