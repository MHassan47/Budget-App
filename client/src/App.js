import "./index.css";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { userContext } from "./provider/userProvider";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import SignUp from "./components/Landing/SignUp";

function App() {
  const { user, setUser } = useContext(userContext);

  const navigate = useNavigate();
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/settings" element={<Settings />} /> */}
      </Routes>
    </div>
  );
}

export default App;
