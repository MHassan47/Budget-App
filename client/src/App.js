import "./index.css";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Landing from "./pages/Landing";

function App() {
  const navigate = useNavigate();
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        {/* <Route path="/settings" element={<Settings />} /> */}
      </Routes>
    </div>
  );
}

export default App;
