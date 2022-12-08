import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import classes from "../Styles/Login.module.scss";
import Button from "../Button";
import axios from "axios";
import { userContext } from "../../provider/userProvider";
function Login() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(userContext);
  const [firstName, setLirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  // console.log(email);
  const handleSignIn = async (e) => {
    // e.preventDefault();
    const credentials = { email, password };
    if (!email || !password) {
      return setError(true);
    }
    try {
      console.log(credentials);
      const response = await axios.post("/api/users/login", credentials);
      console.log(response.data);

      setUser(response.data.user);
      navigate("/dashboard");
    } catch (err) {
      console.log("request error ---- ", err);
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
        />
      </Grid>
    </Grid>
  );
}

export default Login;
