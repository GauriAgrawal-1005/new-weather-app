import { Outlet } from "react-router-dom";
import LoginForm from "./LoginForm";


const ProtectedRoutes=()=>{
  const isAuthenticated = localStorage.getItem("loggedInUser");
  return  isAuthenticated ? <Outlet /> : <LoginForm />;
};

export default ProtectedRoutes;