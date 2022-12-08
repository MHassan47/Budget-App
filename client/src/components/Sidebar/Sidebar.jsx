import React from "react";
import Grid from "@mui/material/Grid";
import { SidebarData } from "./SidebarData";
import classes from "../Styles/Sidebar.module.scss";
function Sidebar() {
  return (
    <Grid
      // direction="column"
      // display="flex"
      // style={{ background: "#4333a1" }}
      className={`${classes.container}`}
    >
      <ul>
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className="row"
              id={window.location.pathname === val.link ? "active" : ""}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <div className={`${classes.icons}`}>{val.icon}</div>{" "}
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </Grid>
  );
}

export default Sidebar;
