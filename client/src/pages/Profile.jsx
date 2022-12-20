import { Grid } from "@mui/material";
import React, { useState } from "react";
import BasicLayout from "../components/BasicLayout";
import ProfileDetails from "../components/Profile/ProfileDetails";
import ProfileHeader from "../components/Profile/ProfileHeader";

function Profile() {
  const [currentTab, setCurrentTab] = useState("profile");
  return (
    <BasicLayout>
      <Grid
        container
        display="flex"
        justifyContent="center"
        md={12}
        // direction="column"
        style={{ marginTop: "5vh" }}
      >
        <Grid item md={10}>
          <ProfileHeader />
        </Grid>
        <Grid
          container
          item
          // display="flex"
          // justifyContent="center"
          md={10}
          style={{ marginTop: "5vh" }}
        >
          <ProfileDetails />
        </Grid>
      </Grid>
    </BasicLayout>
  );
}

export default Profile;
