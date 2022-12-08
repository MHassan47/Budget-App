import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Grid from "@mui/material/Grid";
import RightSideBar from "../components/Sidebar/RightSideBar";
function Dashboard() {
  return (
    <Grid container item md={12} direction="row">
      <Grid item md={2}>
        <Sidebar />
      </Grid>
      <Grid item md={8}></Grid>
      <Grid item md={2}>
        <RightSideBar />
      </Grid>
    </Grid>
  );
}

export default Dashboard;
