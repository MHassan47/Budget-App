import React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import classes from "../Styles/Profile.module.scss";
import { useSelector } from "react-redux";
import ProfileTabs from "./ProfileTabs";
function ProfileHeader() {
  const { user } = useSelector((state) => state.auth);
  return (
    <Grid container direction="column" className={classes.container}>
      {/* <Grid item md={1}></Grid> */}
      <Grid item className={classes.banner}></Grid>
      <Grid container item direction="row" alignItems="center">
        <img className={classes.pfp} src={user.profilePicture} alt="pfp" />
        <Grid
          item
          style={{
            fontSize: "1.7rem",
            fontWeight: "600",
            marginLeft: "1.5rem",
          }}
        >
          {user.firstName + " " + user.lastName}
        </Grid>
      </Grid>
      <Grid item>
        <ProfileTabs />
      </Grid>
    </Grid>
  );
}

export default ProfileHeader;
