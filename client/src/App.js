import "./index.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";

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
  axios.interceptors.request.use(async function (config) {
    const accessToken = await localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["access-token"] = accessToken;
    }
    return config;
  });

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
