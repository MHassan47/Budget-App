import { Outlet, Navigate } from "react-router-dom";
// This will act as a form of middleware, where unauthorized users will be redirected to the login page
const PrivateRoutes = () => {
  let isAuthorized = localStorage.getItem("login");

  if (isAuthorized != null) {
    return isAuthorized ? <Outlet /> : <Navigate to="/" />;
  } else {
    return <Navigate to="/" />;
  }
};

export default PrivateRoutes;
