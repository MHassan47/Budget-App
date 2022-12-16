import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../../features/user/userSlice";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import classes from "../Styles/Login.module.scss";
import Button from "../Button";

function Login({ formType }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (isError) {
      alert(message);
    }
    if (isSuccess) {
      navigate("/dashboard");
    }
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleSignIn = async (e) => {
    e.preventDefault();
    const credentials = { email, password };
    if (!email || !password) {
      return setError(true);
    }
    dispatch(login(credentials));
  };

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    console.log(e.keyCode);
    if (e.keyCode === 13) {
      handleSignIn();
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
          Sign in
        </Typography>
        {error && (
          <Typography sx={{ color: "red" }}>
            Field(s) cannot be empty!
          </Typography>
        )}
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required={true}
          placeholder="Email"
          className={`${classes.input__box}`}
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required={true}
          placeholder="Password"
          className={`${classes.input__box}`}
        />

        <a href="#">Forgot your password?</a>
      </Grid>
      <Grid display="flex" justifyContent="center" alignContent="center">
        <Button
          text="SIGN IN"
          onClick={handleSignIn}
          propClassName={"main__btn"}
          onKeyPress={handleKeypress}
        />
      </Grid>
    </Grid>
  );
}

export default Login;
