import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthForm/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, authLoading } = useContext(AuthContext);

  console.log("Protected Route - User:", user);

  if (authLoading) {
    return <p>Loading...</p>; // Prevent premature redirect
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
