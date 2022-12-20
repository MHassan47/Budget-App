import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateUser, reset } from "../../features/user/userSlice";
import { Grid, Typography } from "@mui/material";
import classes from "../Styles/Profile.module.scss";
import Button from "../Button";

function ProfileDetails() {
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const [firstName, setFirstName] = useState(
    user.firstName ? user.firstName : ""
  );
  const [lastName, setLastName] = useState(user.lastName ? user.lastName : "");
  const [email, setEmail] = useState(user.email ? user.email : "");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = { firstName, lastName, email, currentPassword, newPassword };

    dispatch(updateUser(body));
  };

  return (
    <>
      <Grid container className={`${classes.profile_details_container}`}>
        {user ? (
          <Grid
            item
            display="flex"
            alignContent="center"
            direction="column"
            justifyContent="center"
          >
            {message && (
              <Typography sx={{ fontSize: "1rem", color: "red" }}>
                {message}
              </Typography>
            )}
            <Grid item display="flex" direction="row">
              <label>First Name</label>
              <input
                type="text"
                name="name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item display="flex" direction="row">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item display="flex" direction="row">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>

            <Grid item display="flex" direction="row">
              <label>Current Password</label>
              <input
                type="password"
                name="currentPassword"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </Grid>
            <Grid item display="flex" direction="row">
              <label>New Password</label>
              <input
                type="password"
                name="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </Grid>
            <Grid item display="flex" justifyContent="flex-end">
              <Button
                text="Save"
                onClick={handleSubmit}
                propClassName={"main__btn_small"}
              />
            </Grid>
          </Grid>
        ) : (
          <Grid item></Grid>
        )}
      </Grid>
    </>
  );
}

export default ProfileDetails;
