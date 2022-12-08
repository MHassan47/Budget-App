import React from "react";
import Grid from "@mui/material/Grid";
import { useContext } from "react";
import { userContext } from "../../provider/userProvider";
function RightSideBar() {
  const { user, setUser } = useContext(userContext);
  console.log(user);
  return (
    <Grid
      container
      item
      md={12}
      direction="column"
      style={{ backgroundColor: "teal" }}
    >
      <Grid item md={4}>
        {/* <img src={user?.profilePicture} alt="pfp" /> */}
        {/* <div>{user.email}</div> */}
      </Grid>
    </Grid>
  );
}

export default RightSideBar;
