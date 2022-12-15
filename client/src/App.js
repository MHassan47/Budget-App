import "./index.css";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { userContext } from "./provider/userProvider";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import SignUp from "./components/Landing/SignUp";

import Cards from "./pages/Cards";
import Transaction from "./pages/Transaction";
import CalendarPage from "./pages/CalendarPage";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import PrivateRoutes from "./components/PrivateRoutes";

function App() {
  const { user, setUser } = useContext(userContext);

  axios.interceptors.request.use(async function (config) {
    const accessToken = await localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["access-token"] = accessToken;
    }
    return config;
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("/api/users/me");

        if (!response) {
          setUser({});
        } else {
          setUser(response.data);
        }
      } catch (err) {
        console.log(err);

        localStorage.removeItem("login");
        alert("Session Timedout, Please login!");
        navigate("/");
      }
    };
    const loggedIn = localStorage.getItem("login");
    if (loggedIn) {
      fetchUser();
    }
  }, []);

  // console.log("CURRENT USER", user);
  const navigate = useNavigate();
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/card" element={<Cards />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/calendar" element={<CalendarPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
