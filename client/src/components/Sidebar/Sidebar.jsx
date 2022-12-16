import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { SidebarData } from "./SidebarData";
import LogoutIcon from "@mui/icons-material/Logout";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../features/user/userSlice";
import classes from "../Styles/Sidebar.module.scss";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const [selected, setSelected] = useState("/dashboard");
  const { isSuccess } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  console.log(window.location.pathname);
  return (
    <Grid
      // direction="column"

      // style={{ background: "#4333a1" }}
      className={`${classes.container}`}
    >
      <ul>
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className="row"
              id={val.link === selected ? "active" : ""}
              onClick={() => {
                console.log(selected === val.link);
                setSelected(val.link);
                navigate(val.link);
              }}
            >
              <div className={`${classes.icons}`}>{val.icon}</div>{" "}
              <div id="title">{val.title}</div>
            </li>
          );
        })}

        <button className={`${classes.logout_btn}`} onClick={logoutHandler}>
          <LogoutIcon /> Logout
        </button>
      </ul>
    </Grid>
  );
}

export default Sidebar;
