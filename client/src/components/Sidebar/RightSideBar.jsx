import React from "react";
import Grid from "@mui/material/Grid";
import classes from "../Styles/RightSidebar.module.scss";
import { useContext } from "react";
import { userContext } from "../../provider/userProvider";
import TransactionList from "../Dashboard/TransactionList";
function RightSideBar() {
  const { user, setUser } = useContext(userContext);

  return (
    <Grid
      display="flex"
      container
      alignContent="center"
      item
      md={12}
      direction="column"
      height="100vh"
      style={{ backgroundColor: "#fbecd8" }}
    >
      <Grid
        container
        direction="column"
        className={`${classes.profile_container}`}
        item
      >
        <img className={`${classes.pfp}`} src={user.profilePicture} alt="pfp" />
        <Grid item className={`${classes.user_name}`}>
          {user.firstName} {user.lastName}
        </Grid>
        <Grid className={`${classes.user_email}`}>{user.email}</Grid>
      </Grid>
      <TransactionList />
    </Grid>
  );
}

export default RightSideBar;
