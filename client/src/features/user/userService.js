import axios from "axios";
import FormData from "form-data";
const API_URL = "/api/users/";

// Register user
const register = async (userData) => {
  const formData = new FormData();
  // console.log("userdata", userData.profilePicture);
  // ...

  formData.append("firstName", userData.firstName);
  formData.append("lastName", userData.lastName);
  formData.append("email", userData.email);
  formData.append("password", userData.password);
  formData.append("profilePicture", JSON.stringify(userData.profilePicture));

  const response = await axios.post(API_URL + "register", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  console.log(response);
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
  localStorage.removeItem("accessToken");
  localStorage.removeItem("login");
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
