import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { admin } = useContext(AuthContext);

  return admin ? children : <Navigate to="/login" />;
}

export default PrivateRoute;