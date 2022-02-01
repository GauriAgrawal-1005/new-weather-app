import React from "react";
import {Navigate, Route} from 'react-router-dom';

const ProtectedRoutes = ({ component: Component, ...restOfProps }) => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    console.log("this", isAuthenticated);

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Navigate to="/landingPage" />
      }
    />
  );
}

export default ProtectedRoutes;