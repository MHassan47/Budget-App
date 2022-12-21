import axios from "axios";

const API_URL = "/api/users/";

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL + "register", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
    localStorage.setItem("accessToken", response.data.token);
    localStorage.setItem("login", true);
  }

  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
    localStorage.setItem("accessToken", response.data.token);
    localStorage.setItem("login", true);
  }

  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
};

const updateUser = async (userData) => {
  const response = await axios.put(API_URL + "update", userData);

  if (response.data) {
    localStorage.removeItem("user");
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const authService = {
  register,
  logout,
  login,
  updateUser,
};

export default authService;
