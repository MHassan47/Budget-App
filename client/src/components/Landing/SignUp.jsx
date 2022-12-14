import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register, reset } from "../../features/user/userSlice";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import classes from "../Styles/Login.module.scss";
import Button from "../Button";

function SignUp({ formType, setFormType }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  // const profilePicture =
  //   "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80";
  useEffect(() => {
    if (isError) {
      alert(message);
    }
    if (isSuccess) {
      navigate("/dashboard");
    }
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/;

  const validateEmail = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  };

  const handleSignUp = async (e) => {
    // e.preventDefault();
    // ADD A PROFILE PICTURE INPUT
    const body = { firstName, lastName, email, password };
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      return setError("Field(s) cannot be empty!");
    }

    if (password !== confirmPassword) {
      return setError("Passwords must match");
    }

    if (!password.match(validPassword)) {
      return setError("Password must meet requirements");
    }

    if (!validateEmail(email)) {
      return setError("Email must be valid");
    }
    dispatch(register(body));
  };

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      handleSignUp();
    }
  };

  return (
    <Grid
      container
      item
      md={12}
      display="flex"
      justifyContent="center"
      alignContent="center"
      flexDirection="column"
      height="100vh"
    >
      <Grid
        item
        md={8}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: 28,
            color: "#4333a1",
            width: "10rem",
          }}
        >
          Sign Up
        </Typography>
        {error && <Typography sx={{ color: "red" }}>{error}</Typography>}
        <label>First Name</label>
        <input
          type="firstName"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required={true}
          placeholder="First Name"
          className={`${classes.input__box}`}
        />
        <label>Last Name</label>
        <input
          type="lastName"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required={true}
          placeholder="Last Name"
          className={`${classes.input__box}`}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required={true}
          placeholder="Email"
          className={`${classes.input__box}`}
        />
        <label>Password</label>
        <Typography sx={{ fontSize: "0.7rem" }}>
          Must contain 8 to 20 characters, one capital letter and one number
        </Typography>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required={true}
          placeholder="Password"
          className={`${classes.input__box}`}
        />
        <label>Confirm Password</label>
        <input
          type="password"
          name="Confirm_password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required={true}
          placeholder="Confirm Password"
          className={`${classes.input__box}`}
        />
      </Grid>
      <Grid display="flex" justifyContent="center" alignContent="center">
        <Button
          text="Sign Up"
          onClick={handleSignUp}
          propClassName={"main__btn"}
          onKeyPress={handleKeypress}
        />
      </Grid>
    </Grid>
  );
}

export default SignUp;
