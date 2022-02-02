import { Outlet } from "react-router-dom";
import LoginForm from "./LoginForm";


const ProtectedRoutes=()=>{
  const isAuthenticated = localStorage.getItem("loggedInUser");
  // console.log(isAuthenticated);
  return  isAuthenticated ? <Outlet /> : <LoginForm />;
};

export default ProtectedRoutes;



// import React from "react";
// import {Navigate, Route} from 'react-router-dom';

// const ProtectedRoutes = ({ component: Component, ...restOfProps }) => {
//     const isAuthenticated = localStorage.getItem("isAuthenticated");
//     console.log("this", isAuthenticated);

//   return (
//     <Route
//       {...restOfProps}
//       render={(props) =>
//         isAuthenticated ? <Component {...props} /> : <Navigate to="/landingPage" />
//       }
//     />
//   );
// }

// export default ProtectedRoutes;